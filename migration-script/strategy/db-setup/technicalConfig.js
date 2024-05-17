const shell = require("shelljs");
const fs1 = require("fs");
const addDeployFormat = require("../addDeployFormat");

const technicalConfig = (directory, option) => {
  try {
    if (option == 3) {
      var cap_db_dest = directory + "/db";
      process.chdir(cap_db_dest);
      const files = shell.find(".").filter((file) => file.endsWith(".cds"));
      files.forEach((file) => {
        let fileData = fs1.readFileSync(file, "utf8");
        let updatedFileData = fileData.replace(
          /@sql\.append:\s+`{3}\s*technical configuration \{\s*([\s\S]*?)\s*;\s*\}\s*`{3}/g,
          (match, p1) => {
            let techConfigValue = p1.trim();
            return `@sql.append: \`\`\`\n${techConfigValue}\n\`\`\``;
          }
        );
        fs1.writeFileSync(file, updatedFileData, "utf8");
      });
      process.chdir("../");
      addDeployFormat(option);
      console.log("Successfully changed hdbcds to hdbtable");
      process.exit(0);
    }

    const files = shell.find(directory).filter((file) => file.endsWith(".cds"));
    files.forEach(function (file) {
      let fileData = fs1.readFileSync(file, "utf8");
      let regex = /((@Comment:[^\n]*\n)*\s*)entity\s+\w+\s*{\s*[\w\s:;.()+,0-9@|&'_/=*[\]\/]+\s*}\s*technical\s+configuration\s*{\s*[\w\s:;.()+,0-9@|&'_/=*[\]\/]+\s*}/gi;
      if (regex.test(fileData)) {
        fileData = fileData.replace(
          regex,
          (match, comments) => {
            let techConfigRegex = /technical\s+configuration\s*{([\s\S]+?)}/gi;
             let entityRegex = /entity\s+\w+\s*{([\s\S]+?)}/gi
            let techConfigValue= techConfigRegex.exec(match)[1];
            let entity = entityRegex.exec(match)[0]
            if (option == 1) {
              techConfigValue = techConfigValue
                .replace(/fulltext\s*index[\s\S]*?;/gi, "")
                .trim();
              techConfigValue = techConfigValue.replace(/\s\s+/g, " ");
              if (techConfigValue === "") {
                return `${comments || ""}${entity}`;
              } else {
                return `${
                  comments || ""
                }@sql.append: \`\`\`\n  technical configuration {\n    ${techConfigValue}\n  }\n\`\`\`\n${entity}`;
              }
            } else {
              techConfigValue = techConfigValue
                .replace(/fulltext\s*index[\s\S]*?;/gi, "")
                .replace(/column\s*store[\s\S]*?;/gi, "")
                .replace(/row\s*store[\s\S]*?;/gi, "")
                .trim();
              const techConfigValueArray = techConfigValue.split(";");
              //techConfigValue = techConfigValue.replace(/\;/g, ";\n");
              if (techConfigValue === "") {
                return `${comments || ""}${entity}`;
              } else {
                if (techConfigValueArray.length <= 2) {
                  return `${
                    comments || ""
                  }@sql.append: \`\n  technical configuration {\n    ${techConfigValue}\n  }\n\`\n${entity}`;
                } else {
                  return `${
                    comments || ""
                  }@sql.append: \`\`\`\n  technical configuration {\n    ${techConfigValue}\n  }\n\`\`\`\n${entity}`;
                }
              }
            }
          }
        );
        fs1.writeFileSync(file, fileData, "utf8");
      }
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

module.exports = technicalConfig;
