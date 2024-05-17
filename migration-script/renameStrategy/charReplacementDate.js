class CharReplacementDate{   
    configure(config){
        this.regex = new RegExp("date\\(", 'g');
        this.replacement = "daydate(";
    }
    
    process(fileContent){
        let updatedContent = fileContent.replace(this.regex, this.replacement);
        return updatedContent;
    }
}
module.exports = CharReplacementDate;
