const fs1 = require("fs");
const path = require("path");
const shell = require("shelljs");

const processFolder = (directory) => {
  try {
    const files = fs1.readdirSync(directory);
    for (file of files) {
      if (path.extname(file) === ".cds") {
        createhdbtabletype(path.join(directory, file));
        checkAndDeleteFile(path.join(directory, file));
      }
    }
  } catch (err) {
    console.error(`Error: ${err}`);
  }
};

const createhdbtabletype = (file) => {
  try {
    let data = fs1.readFileSync(file, "utf8");
    let lines = data.trim().split("\n");
    let regexNamespace = /namespace\s+([\w\d_.]+)/i;
    let regexContext = /context\s(\w+)\s\{/i;
    let regexTableType = /table\s+(type|Type)\s+(\w+)\s*/i;
    let regexBraceStart = /^\s*\{\s*$/i;
    let regexEntityTable = /Entity\s+(\w+)\s*{/i;
    let regexBraceEnd = /};\s*$/i;
    let namespaces = [];
    let contexts = [];
    let tableName = "";
    let args = [];
    let tableTypeLines = [];
    let inTableTypeContext = false;
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      let namespaceMatch = regexNamespace.exec(line);
      if (namespaceMatch) {
        namespaces.push(namespaceMatch[1]);
        continue;
      }
      let contextMatch = regexContext.exec(line);
      if (contextMatch) {
        contexts.push(contextMatch[1]);
        continue;
      }
      let tableTypeMatch = regexTableType.exec(lines[i - 1] + lines[i]);
      if (tableTypeMatch) {
        inTableTypeContext = true;
        tableName = tableTypeMatch[2];
        if (regexBraceStart.test(lines[i + 1])) {
          lines[i + 1] = lines[i + 1].replace("{", "");
        }
        lines[i - 1] = lines[i - 1].replace("table", "");
        tableTypeLines.push(i);
        continue;
      }
      let entityTableMatch = regexEntityTable.exec(line);
      if (entityTableMatch) {
        inTableTypeContext = false;
      }
      if (inTableTypeContext) {
        if (regexBraceEnd.test(line)) {
          processTableType(namespaces, contexts, tableName, args);
          args = [];
          tableName = "";
          tableTypeLines.push(i);
          inTableTypeContext = false;
        } else {
          let [colName, colType] = line.trim().split(/\s*:\s*/);
          if (colName && colType) {
            let entity;
            if (
              colType.includes(".") &&
              !colType.includes("Association") &&
              !colType.includes("hana")
            ) {
              entity = colType.split(".")[0];
              console.log("entitytyyy", entity);
              unsupportedCol = colType.split(".")[1].replace(";", "");
              //console.log("Entityyy", entity);
              try {
                const pattern = new RegExp(
                  `using\\s+(\\S+)\\s+as\\s+${entity}\\b`
                );
                const match = data.match(pattern);
                let entityVal = match && match[1] ? match[1] : entity;
                console.log("entityyy aval", entityVal);
                //if (entityVal !== null) {
                //console.log("entityyyyy vallll", entityVal);
                const entityFile = shell
                  .find(process.cwd())
                  .filter((file) => file.endsWith(entityVal + ".cds"));
                //console.log("enrityyyyyy", entityFile);
                const entityData = fs1.readFileSync(entityFile[0], "utf8");
                //console.log("entityyyy data", entityData);
                const lines = entityData.split("\n");
                const dataTypeLines = lines.filter((line) =>
                  line.includes(unsupportedCol)
                );
                //console.log("Linensjndkjw", lines.length);
                console.log("lineeeee", dataTypeLines[0]);
                if (dataTypeLines[0].includes(":")) {
                  colType = dataTypeLines[0].split(":")[1].replace(";", "");
                }
                // const pattern = new RegExp(
                //   unsupportedCol + "\\s*{([^}]*)}",
                //   "s"
                // );
                // const match = entityData.match(pattern);
                // if (match) {
                //   const content = match[1].trim();
                //   console.log("bhdwqjdhwql", content);
                // } else {
                //   console.log(
                //     `${unsupportedCol} block not found in the content.`
                //   );
                // }
                //   colType = dataTypeLines[0].split(":")[1].replace(";", "");
                // }

                //console.log("collll", colType);
                // else if (!dataTypeLines[0].includes(":")) {
                //   const entityFile = shell
                //     .find(process.cwd())
                //     .filter((file) => file.endsWith(entity + ".cds"));
                //   const entityData = fs1.readFileSync(entityFile[0], "utf8");
                //   //const linesEntity = entityData.split("\n");
                //   const dataTypeLines = entityData
                //     .split("\n")
                //     .filter(
                //       (line) =>
                //         line.includes(unsupportedCol) && !line.includes(":")
                //     );

                //   //console.log("Linensjndkjw", lines.length);
                //   console.log("lineeeee", dataTypeLines[0]);
                //   //if (!dataTypeLines[0].includes(":")) {
                //   const pattern = new RegExp(
                //     unsupportedCol + "\\s*{([^}]*)}",
                //     "s"
                //   );
                //   const match = entityData.match(pattern);
                //   const content =
                //     match && match[1]
                //       ? match[1].trim()
                //       : console.log(
                //           `${unsupportedCol} block not found in the content.`
                //         );

                //   console.log("contentttt", content);

                //   const modifiedLine = content
                //     .split("\n")
                //     .map((line) => {
                //       const parts = line.split(" :");

                //       parts[0] = colName + "_" + parts[0].trim();

                //       return parts.join(" :");
                //     })
                //     .join("\n");

                //   console.log("modify", modifiedLine);
                //   const extractedLines = modifiedLine
                //     .split("\n")
                //     .filter((line) => line.includes("Association"));

                //   console.log("extractedLines", extractedLines);
                // }
              } catch (err) {
                console.error("Error reading file:", err);
                return false;
              }
            }
            //else if (colType.includes("Association")) {
            //   let colVal = colType.split("Association to")[1].replace(";", "");

            //   if(!colVal.includes(".")){

            //   }
            // }
            // let regexPattern = new RegExp(
            //   `^\\s*using\\s+[\\w.]+\\s+as\\s+${entity}\\s+from\\s+'.*'\\s*;\\s*$`
            // );
            // if (regexPattern.test(data))
            // const file = shell.find(process.cwd()).filter((file) => file.endsWith(entity+".cds"));
            // const data = fs1.readFileSync(file, "utf8");
            // console.log("dataaaaa", data)

            args.push(
              `"${colName}" ${colType
                .replace("String", "NVARCHAR")
                .replace("LargeString", "NVARCHAR")
                .replace(/;/g, "")}`
            );
            tableTypeLines.push(i);
          }
        }
      }
    }
    //lines = lines.filter((_, index) => !tableTypeLines.includes(index));
    fs1.writeFileSync(file, lines.join("\n"), "utf8");

    if (tableName.length > 0 && args.length > 0) {
      processTableType(namespaces, contexts, tableName, args);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const checkAndDeleteFile = (file) => {
  try {
    const data = fs1.readFileSync(file, "utf8");
    const isEmpty = data.trim() === "";
    if (isEmpty) {
      fs1.unlinkSync(file);
      console.log(`Deleted file: ${file}`);
      return;
    }
    if (!data.includes("context")) {
      return;
    }
    const blocks = data.match(/context\s+\w+\s*{[^}]*}/gi) || [];
    const nonEmptyBlocks = blocks.filter(
      (block) => !/context\s+\w+\s*{\s*\n*\t*}/gi.test(block)
    );
    if (nonEmptyBlocks.length === 0) {
      fs1.unlinkSync(file);
      console.log(`Deleted file: ${file}`);
      return;
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const processTableType = (namespaces, contexts, tableName, args) => {
  try {
    let dir = path.join(".", "src", "types");
    if (!fs1.existsSync(dir)) {
      fs1.mkdirSync(dir, { recursive: true });
    }
    let prefix =
      contexts.length > 0
        ? contexts[contexts.length - 1].toUpperCase() + "_"
        : "";
    if (namespaces.length > 0) {
      prefix =
        namespaces[namespaces.length - 1].toUpperCase().replace(/\./g, "_") +
        "_" +
        prefix;
    }
    let newTypeName = `"${prefix}${tableName.toUpperCase()}"`;
    let newContent = `TYPE ${newTypeName} AS TABLE (\n\t${args.join(
      ",\n\t"
    )}\n);`;
    let newFile = path.join(
      dir,
      `${prefix}${tableName.toUpperCase()}.hdbtabletype`
    );
    fs1.writeFileSync(newFile, newContent, "utf8");
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

module.exports = processFolder;
