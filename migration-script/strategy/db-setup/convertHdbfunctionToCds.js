const {find} = require("shelljs");
const {writeFileSync,readFileSync} = require("fs");
const { convertDbTypes, convertToCds } = require("./convertHdbtableToCds");
const { groupContextEntity } = require("./groupContextEntity");

let reportHdbfunctionFiles = [];
let reportHdbfunctionProxyCds = [];
let reportHdbfunctionTableInput = [];
let reportHdbfunctionMissingTables = [];

const reportHdbfunctionToCds = ()=>{
    let report = {
        reportHdbfunctionFiles: [...reportHdbfunctionFiles],
        reportHdbfunctionProxyCds: [...reportHdbfunctionProxyCds],
        reportHdbfunctionTableInput: [...reportHdbfunctionTableInput],
        reportHdbfunctionMissingTables: [...reportHdbfunctionMissingTables]
    };
    reportHdbfunctionFiles.splice(0, reportHdbfunctionFiles.length);
    reportHdbfunctionProxyCds.splice(0, reportHdbfunctionProxyCds.length);
    reportHdbfunctionTableInput.splice(0, reportHdbfunctionTableInput.length);
    reportHdbfunctionMissingTables.splice(0, reportHdbfunctionMissingTables.length);

    return report;
}

const dataTypesCleanUp = (type) =>{
    if(type.includes('))')) {
        return  type.replace(/\)$/, '').trim();
    }else if (type.includes('(') && type.includes(')')) {
        return type.trim()
    }else if(type.includes(')')){
        return type.split(')')[0].trim()
    }else{
        return type.trim()
    }
}

const convertFunctionToCds = (entity,inputParameter,returnTable,extratedTableList,file) =>{
    let output = ""
    output += '@cds.persistence.exists\n'
    output += '@cds.persistence.udf\n';
    let entityName = entity.replace(/::/g, '_').replace(/\./g, '_').replace(/"/g, '');
    if(returnTable && returnTable[0].type !== ''){
        if (inputParameter.length == 0) {
          output += `entity ${entityName} {\n\t${returnTable.map(item => `${item.field.replace(/::/g, '_').replace(/\./g, '_')}: ${convertDbTypes(dataTypesCleanUp(item.type))}`).join(';\n\t')}\n}`
        } else {
          output += `entity ${entityName}(${inputParameter.map(item => `${item.field.replace(/::/g, '_').replace(/\./g, '_')}: ${convertDbTypes(dataTypesCleanUp(item.type))}`).join(', ')}) {\n\t${returnTable.map(item => `${item.field.replace(/::/g, '_').replace(/\./g, '_')}: ${convertDbTypes(dataTypesCleanUp(item.type))}`).join(';\n\t') + ';'}\n}`
        }
        return output
    }else if(returnTable.length == 1){
        let tableFound = false;
        for (const item of extratedTableList.extractingData) {
            if (item.tableName.toUpperCase() === returnTable[0].field) {
                const data = readFileSync(item.file , 'utf8');
                const {columns,associationDetails} = convertToCds(data);
                if (inputParameter.length == 0) {
                    output += `entity ${entityName}  {\n\t${columns.map(item => `${item.name}: ${item.type}`).join(';\n\t') + ';'}${associationDetails ? `\n${associationDetails.join('\n')}` : ''}\n}`
                  } else {
                    output += `entity ${entityName}(${inputParameter.map(item => `${item.field.replace(/::/g, '_').replace(/\./g, '_')}: ${convertDbTypes(dataTypesCleanUp(item.type))}`).join(', ')}) {\n\t${columns.map(item => `${item.name}: ${item.type}`).join(';\n\t') + ';'}${associationDetails ? `\n${associationDetails.join('\n')}` : ''}\n}`
                }
                tableFound = true;
                return output;
            }
        }
        if (!tableFound) {
            reportHdbfunctionMissingTables.push(file.split('/').pop());
        }
    }
}

const extractFieldAndTypes = (data,extratedTableList,file)=>{

    let originalData = data;
    data = data.toUpperCase().replace(/,\s*.*\s+TABLE.*\)\s+\)\s+(RETURNS)/is, ') ' + "$1");
    let splitEntity = data.match(/FUNCTION\s+"?([^()]+)/)
    let entity = ''
    if(splitEntity){
        entity = splitEntity[1].replace(/\./g, '_').replace(/::/g, '_');
    }
    let pattern = /,(.*?TABLE.*?)RETURNS/s;
    let match = data.match(pattern);
    if(match){
        data = data.replace(match[1], ')');
    }
    let parametersString = originalData.substring(originalData.indexOf("(") + 1, originalData.toUpperCase().indexOf("RETURNS") - 2).trim();
    parametersString = parametersString.split(/,+(?![^()]*\))/).map(item => item.trim());
    let parameters = [];
    let regeular = /[^,()]+(?:\([^)]*\))?/g;
    let matches;

    while ((matches = regeular.exec(parametersString)) !== null) {
        parameters.push(matches[0].trim());
    }
    let inputParameter = parameters.filter(item => item && item !== ')')
    .map(item => {
           var temp = item.replace(/IN\s+|DEFAULT\s+/ig, '').replace("''",'').trim().split(/\s+/);
           if(temp[0] !== ''){
            return {field: temp[0], type: temp.slice(1).join(' ')};
           }
    })
    .filter(item => item);

    let cleanData = data.toUpperCase().replace(/[\n\s]{2,}/g, ' ');
    let returnTableDefStr = cleanData.split('RETURNS')[1].split('LANGUAGE')[0].split(' AS ')[0].replace(/TABLE\(/g, '').replace(/TABLE \(/g, '');
    let returnTableDef = returnTableDefStr.split(/,(?!\s*\d+\))/).map(item => item.trim());
    let returnTable = returnTableDef.map((item) =>{
        let result = item.trim().split(' ').map(item => item.trim());
        return {field: result[0].replace(/"/g, ''), type: result.slice(1).join('')}
    });
    return convertFunctionToCds(entity,inputParameter,returnTable,extratedTableList,file)
}


const convertHdbfunctionToCds = (directory, extension) => {
    try {
        const files = find(directory).filter((file) => file.endsWith(extension));
        let extratedTableList = groupContextEntity(".",".hdbtable");
        let proxyCdsArray = []
        files.forEach(file => {
            let pattern = /,(.*?TABLE.*?)RETURNS/s;
            let data = readFileSync(file, "utf8");
            if(!data.toUpperCase().match(pattern)){
                reportHdbfunctionFiles.push(file.split('/').pop())
                const convertedData = extractFieldAndTypes(data,extratedTableList,file);
                if(convertedData) proxyCdsArray.push(convertedData)
            }else{
                reportHdbfunctionTableInput.push(file.split('/').pop())
            }
        });
        if(proxyCdsArray.length > 0){ 
            reportHdbfunctionProxyCds.push('Proxy_Hdbfunction.cds')
            writeFileSync('Proxy_Hdbfunction.cds', proxyCdsArray.join('\n\n'))
        }
    } catch (error) {
        console.error(`Error converting hdbfunction to cds: ${error}`);
    }
};

module.exports = {convertHdbfunctionToCds,reportHdbfunctionToCds,extractFieldAndTypes,convertFunctionToCds,dataTypesCleanUp}