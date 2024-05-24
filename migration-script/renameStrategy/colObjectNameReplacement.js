class ColObjectNameReplacement {
  configure(config) {}
  process(fileContent) {
    const lines = fileContent.split("\n");
    const updatedLines = lines.map((line) => {
      return line.replace(
        /(Join_|Aggregation_|Union_|Projection_)/gi,
        (match) => {
          return match.slice(-1) === "_"
            ? match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
            : match;
        }
      );
    });
    const updatedData = updatedLines.join("\n");
    return updatedData;
  }
}
module.exports = ColObjectNameReplacement;
