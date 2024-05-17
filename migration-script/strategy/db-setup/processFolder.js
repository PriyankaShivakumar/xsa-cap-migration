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
    const dataTypes = [
      "String",
      "LocalDate",
      "VARCHAR",
      "TINYINT",
      "DateTime",
      "Timestamp",
      "LargeBinary",
      "LargeString",
      "Boolean",
      "Decimal",
      "Integer",
      "Double",
      "Binary",
      "hana.TINYINT",
      "hana.SMALLINT",
      "hana.REAL",
      "hana.VARCHAR",
      "hana.SMALLDECIMAL",
      "hana.ALPHANUM",
      "hana.BINARY",
      "hana.CLOB",
      "hana.ST_POINT",
      "hana.ST_GEOMETRY",
      "Time",
      "Date",
    ];
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
            if (!colType.includes(".") && !colType.includes("Association to")) {
              let extractedColType = colType
                .replace(/\(.*\)/, "")
                .replace(";", "");
              if (!dataTypes.includes(extractedColType)) {
                const unsupportedCol = colType.replace(";", "").trim();
                const entityData = fs1.readFileSync(file, "utf8");
                const regex = new RegExp(
                  `^\\s*type\\s*${unsupportedCol}\\s*:\\s*(\\w+)\\s*;`,
                  "m"
                );
                const match = entityData.match(regex);
                colType = match[0].split(":")[1].trim().replace(";", "");
              }
              args.push(
                `"${colName}" ${colType
                  .replace("String", "NVARCHAR")
                  .replace("LargeString", "NVARCHAR")
                  .replace(/;/g, "")}`
              );
            } else if (
              colType.includes(".") &&
              !colType.includes("hana") &&
              !colType.includes("Association to")
            ) {
              entity = colType.split(".")[0];
              unsupportedCol = colType.split(".")[1].replace(";", "");
              try {
                const pattern = new RegExp(
                  `using\\s+(\\S+)\\s+as\\s+${entity}\\b`
                );
                const match = data.match(pattern);
                let entityVal = match && match[1] ? match[1] : entity;
                const entityFile = shell
                  .find(process.cwd())
                  .filter((file) => file.endsWith(entityVal + ".cds"));
                const entityData = fs1.readFileSync(entityFile[0], "utf8");
                const dataTypeLines = entityData
                  .split("\n")
                  .filter((line) => line.includes(unsupportedCol));
                if (dataTypeLines[0].includes(":")) {
                  colType = dataTypeLines[0].split(":")[1].replace(";", "");
                  args.push(
                    `"${colName}" ${colType
                      .replace("String", "NVARCHAR")
                      .replace("LargeString", "NVARCHAR")
                      .replace(/;/g, "")}`
                  );
                } else if (dataTypeLines[0].includes("{")) {
                  const pattern = new RegExp(
                    unsupportedCol + "\\s*{([^}]*)}",
                    "s"
                  );
                  const match = entityData.match(pattern);
                  const content =
                    match && match[1]
                      ? match[1].trim()
                      : console.log(
                          `${unsupportedCol} block not found in the content.`
                        );
                  const modifiedLine = content
                    .split("\n")
                    .map((line) => {
                      const parts = line.split(" :");
                      parts[0] = colName + "_" + parts[0].trim();
                      return parts.join(" :");
                    })
                    .join("\n");
                  let arrayLines = modifiedLine.split("\n");
                  arrayLines.forEach((line) => {
                    let [colNameIn, colTypeIn] = line.trim().split(/\s*:\s*/);
                    colName = colNameIn;
                    if (
                      colTypeIn.includes(".") ||
                      !colTypeIn.includes("Association")
                    ) {
                      entity = colTypeIn.split(".")[0];
                      unsupportedCol = colTypeIn.split(".")[1].replace(";", "");
                      const pattern = new RegExp(
                        `using\\s+(\\S+)\\s+as\\s+${entity}\\b`
                      );
                      const match = data.match(pattern);
                      let entityVal = match && match[1] ? match[1] : entity;
                      const entityFile = shell
                        .find(process.cwd())
                        .filter((file) => file.endsWith(entityVal + ".cds"));
                      const entityData = fs1.readFileSync(
                        entityFile[0],
                        "utf8"
                      );
                      const dataTypeLines = entityData
                        .split("\n")
                        .filter((line) => line.includes(unsupportedCol));
                      if (dataTypeLines[0].includes(":")) {
                        colType = dataTypeLines[0]
                          .split(":")[1]
                          .replace(";", "");
                      }
                      args.push(
                        `"${colName}" ${colType
                          .replace("String", "NVARCHAR")
                          .replace("LargeString", "NVARCHAR")
                          .replace(/;/g, "")}`
                      );
                    } else if (
                      !colTypeIn.includes(".") ||
                      colTypeIn.includes("Association")
                    ) {
                      const associationEntity = colTypeIn
                        .split("Association to")[1]
                        .trim()
                        .replace(";", "");
                      const regex = new RegExp(
                        `^entity\\s+${associationEntity}\\s*{([^}]*)}`,
                        "mi"
                      );
                      const match = entityData.match(regex);
                      if (match) {
                        const capturedContent = match[1];
                        capturedContent.split("\n").forEach((capture) => {
                          if (capture.includes("key")) {
                            const key = capture
                              .split(":")[0]
                              .replace("key", "")
                              .trim();
                            line =
                              line.split(":")[0].trim() +
                              "_" +
                              key +
                              " : " +
                              capture.split(":")[1];
                            if (line.includes(".")) {
                              colName = line.split(":")[0].trim();
                              entity = line.split(":")[1].split(".")[0].trim();
                              unsupportedCol = line
                                .split(".")[1]
                                .replace(";", "");
                              const pattern = new RegExp(
                                `using\\s+(\\S+)\\s+as\\s+${entity}\\b`
                              );
                              const match = data.match(pattern);
                              let entityVal =
                                match && match[1] ? match[1] : entity;
                              const entityFile = shell
                                .find(process.cwd())
                                .filter((file) =>
                                  file.endsWith(entityVal + ".cds")
                                );
                              const entityData = fs1.readFileSync(
                                entityFile[0],
                                "utf8"
                              );
                              const dataTypeLines = entityData
                                .split("\n")
                                .filter((line) =>
                                  line.includes(unsupportedCol)
                                );
                              if (dataTypeLines[0].includes(":")) {
                                colType = dataTypeLines[0]
                                  .split(":")[1]
                                  .replace(";", "");
                              }
                              args.push(
                                `"${colName}" ${colType
                                  .replace("String", "NVARCHAR")
                                  .replace("LargeString", "NVARCHAR")
                                  .replace(/;/g, "")}`
                              );
                            }
                          }
                        });
                      }
                    }
                  });
                }
              } catch (err) {
                console.error("Error reading file:", err);
                return false;
              }
            } else if (colType.includes("Association to")) {
              const associationEntity = colType
                .split("Association to")[1]
                .trim()
                .replace(";", "");
              const regex = new RegExp(
                `^entity\\s+${associationEntity}\\s*{([^}]*)}`,
                "mi"
              );
              const entityData = fs1.readFileSync(file, "utf8");
              const match = entityData.match(regex);
              if (match) {
                const capturedContent = match[1];
                capturedContent.split("\n").forEach((capture) => {
                  if (capture.includes("key")) {
                    const key = capture.split(":")[0].replace("key", "").trim();
                    line =
                      line.split(":")[0].trim() +
                      "_" +
                      key +
                      " : " +
                      capture.split(":")[1];
                    if (line.includes(".")) {
                      colName = line.split(":")[0].trim();
                      entity = line.split(":")[1].split(".")[0].trim();
                      unsupportedCol = line.split(".")[1].replace(";", "");
                      const pattern = new RegExp(
                        `using\\s+(\\S+)\\s+as\\s+${entity}\\b`
                      );
                      const match = data.match(pattern);
                      let entityVal = match && match[1] ? match[1] : entity;
                      const entityFile = shell
                        .find(process.cwd())
                        .filter((file) => file.endsWith(entityVal + ".cds"));
                      const entityData = fs1.readFileSync(
                        entityFile[0],
                        "utf8"
                      );
                      const dataTypeLines = entityData
                        .split("\n")
                        .filter((line) => line.includes(unsupportedCol));
                      if (dataTypeLines[0].includes(":")) {
                        colType = dataTypeLines[0]
                          .split(":")[1]
                          .replace(";", "");
                      }
                    }
                  }
                });
              }
              args.push(
                `"${colName}" ${colType
                  .replace("String", "NVARCHAR")
                  .replace("LargeString", "NVARCHAR")
                  .replace(/;/g, "")}`
              );
            }
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
