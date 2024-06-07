const {writeFileSync,readFileSync} = require("fs");
const {find} = require("shelljs");
const { executeQuery } = require("./convertCalcviewToCds");
const { convertDbTypes } = require("./convertHdbtableToCds");

const extractViewName = (data) => {
  let fromIndex = data.toUpperCase().indexOf("VIEW ");
  let subData = data.substring(fromIndex);
  let match = subData.match(/VIEW (\S+)/i);
  let viewName = match ? match[1] : null;
  if(viewName){
    return viewName.replace(/"/g, '');
  }
  return viewName
}

const executingQuery = async (hdbViewsIds) =>{
  try {
      const combinedOutputObj = {};
      for (const id of hdbViewsIds) {
          const outputForId = {};
          const sqlQueryDimensionView = `SELECT COLUMN_NAME, DATA_TYPE_NAME, LENGTH FROM VIEW_COLUMNS WHERE VIEW_NAME = '${id}'`;
          const sqlQueryVariableView = `SELECT PARAMETER_NAME, DATA_TYPE_NAME, LENGTH FROM VIEW_PARAMETERS WHERE VIEW_NAME = '${id}'`;
          try {
              outputForId.dimensionView = await executeQuery(sqlQueryDimensionView);
          } catch (err) {
              console.error('Error executing dimension view query for ID', id, err);
              continue; 
          }
          try {
              outputForId.variableView = await executeQuery(sqlQueryVariableView);
          } catch(err) {
              console.error('Error executing variable view query for ID', id, err);
              continue;
          }
          combinedOutputObj[id] = outputForId;
      }
      return combinedOutputObj;
      
  } catch (error) {
      console.error('Unanticipated Error processing DB:', error);
  }
}

const convertToProxyCds = (data) =>{
  let proxyCdsArray = []
  for (let key in data) {
      if(data[key].variableView.length > 0 || data[key].dimensionView.length > 0 ){
          let output = "";
          let entityName = key.replace(/::/g, '_').replace(/\./g, '_').toUpperCase()
          output += `@cds.persistence.exists \nentity ${entityName} `;
          if (data[key].variableView && data[key].variableView.length > 0) {
              output += "(";
              data[key].variableView.forEach((variable, index) => {
              if (index !== 0) { 
                  output += ", ";
              }
              output += `${variable.PARAMETER_NAME} : ${convertDbTypes(`${variable.DATA_TYPE_NAME}(${variable.LENGTH})`)}`;
              });
              output += ") ";
          }
          output += "{\n";
          data[key].dimensionView.forEach((dim) => {
              output += `    ${dim.COLUMN_NAME} : ${convertDbTypes(`${dim.DATA_TYPE_NAME}(${dim.LENGTH})`)};\n`;
          });
          output += "};\n";
          proxyCdsArray.push(output);
      }
  }
  return proxyCdsArray;
}

const convertHdbviewToCds = async (directory, extension) => {
  try {
    const files = find(directory).filter((file) => file.endsWith(extension));
    const hdbViewsIds = [];
    files.forEach(file => {
      let data = readFileSync(file, "utf8");
      let id = extractViewName(data);
      hdbViewsIds.push(id);
    });
    let queryResult  = await  executingQuery(hdbViewsIds);
    let newFileContent = convertToProxyCds(queryResult);
    if(newFileContent.length > 0){ 
        writeFileSync('Proxy_Hdbview.cds', newFileContent.join('\n\n'));
    }
  } catch (error) {
    console.error(`Error converting hdbview to cds: ${error}`);
  }
};

module.exports = {convertHdbviewToCds,extractViewName,convertToProxyCds,executingQuery};