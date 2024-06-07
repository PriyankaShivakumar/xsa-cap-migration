const { readFileSync, writeFileSync } = require("fs");
const { find } = require("shelljs");

const modifyAndReplaceData = (data) => {
    const definitionRegex = /(type|entity)\s+([A-Za-z]+)\s*{([\s\S]*?)}/gi;
    data = data.replace(definitionRegex, (match, definitionType, definitionName, definitionBody) => {
        definitionBody = definitionBody.replace(/type\s+of\s+(([A-Za-z]+\.)+[A-Za-z]+)/gi, (innerMatch, fullDefinition) => {
            const parts = fullDefinition.split('.');
            const definition = parts.slice(0, -1).join('.');
            const field = parts.slice(-1)[0];
            if (definitionName.toLowerCase() === definition.toLowerCase()) {
                return `type of ${field}`;
            } else {
                return `${definition} : ${field}`;
            }
        });
        return `${definitionType} ${definitionName} {${definitionBody}}`;
    });
    const typeOfTypeRegex = /type\s+([^{}:;]+)\s*:\s*type\s+of\s+([^{}:;]+);/g;
    data = data.replace(typeOfTypeRegex, (match, defType, fullDefinition) => {
        const parts = fullDefinition.split('.');
        const definition = parts.slice(0, -1).join('.');
        const field = parts.slice(-1)[0];
        return `type ${defType} : ${definition} : ${field}`;
    });
    return data;
};

const typeOfConversion = (directory, extension) => {
    try {
        const files = find(directory).filter((file) => file.endsWith(extension));
        files.forEach(file => {
            const originalData = readFileSync(file, 'utf8');
            const modifiedData = modifyAndReplaceData(originalData);
            if (originalData !== modifiedData) {
                writeFileSync(file, modifiedData);
            }
        });
    } catch (error) {
        console.error(`Error converting Types: ${error}`);
    }
};

module.exports = {typeOfConversion}