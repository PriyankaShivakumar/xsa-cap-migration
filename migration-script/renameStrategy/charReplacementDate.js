class CharReplacementDate{   
    configure(config){
        this.regex = new RegExp("date\\(", 'g');
        this.regexTime = new RegExp("time\\(", 'g');
        this.replacement = "daydate(";
        this.replacementTime = "secondtime(";
    }
    
    process(fileContent){
        let updatedContent = fileContent.replace(this.regex, this.replacement).replace(this.regexTime, this.replacementTime);
        return updatedContent;
    }
}
module.exports = CharReplacementDate;
