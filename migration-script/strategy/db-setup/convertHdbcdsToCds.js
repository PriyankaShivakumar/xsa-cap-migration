const fs1 = require("fs");
const path = require("path");
const {ensureDirSync,mkdirSync,moveSync} = require('fs-extra')

let reportHdbcdsFiles = []
let reportHdbcdsToCdsFiles = []
const reportHdbcdsToCds = () =>{
  return {reportHdbcdsFiles,reportHdbcdsToCdsFiles}
}

const convertHdbcdsToCds = (directory, oldExtension, newExtension) => {
  try {
    const files = fs1.readdirSync(directory, { withFileTypes: true });
    let cdsDirectoryPath = path.join(process.cwd(), 'cds');
    ensureDirSync(cdsDirectoryPath);
    for (let file of files) {
      if (file.isDirectory()) {
        convertHdbcdsToCds(
          path.join(directory, file.name),
          oldExtension,
          newExtension
        );
      } else if (path.extname(file.name) === oldExtension) {
        reportHdbcdsFiles.push(file.name)
        const oldFileName = path.join(directory, file.name);
        const newFileName = path.join(
          directory,
          path.basename(file.name, oldExtension) + newExtension
        );
        reportHdbcdsToCdsFiles.push(path.basename(newFileName))
        fs1.renameSync(oldFileName, newFileName);

        let relativePath = path.relative(newFileName.split('\\')[0], newFileName);
        // const pathParts = relativePath.split('\\');
        // const relevantParts = [pathParts[0], pathParts[pathParts.length - 1]];
        // relativePath = relevantParts.join('\\');
        ensureDirSync(path.join(cdsDirectoryPath, path.dirname(relativePath)));
        moveSync(newFileName, path.join(cdsDirectoryPath, relativePath));

      }
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

module.exports = {convertHdbcdsToCds,reportHdbcdsToCds};
