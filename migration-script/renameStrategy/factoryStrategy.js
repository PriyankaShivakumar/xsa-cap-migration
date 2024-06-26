// const CDS = require('./cdsStrategy');
const CharReplacementUppercase = require('./charReplacementStrategy');
const CharReplacementUppercaseSingleQuote = require('./charReplacementSingleQuoteStrategy');
const CharReplacementDate = require("./charReplacementDate")
const ColObjectNameReplacement = require("./colObjectNameReplacement")
const XSLT = require('./xsltStrategy');
const CharReplacementCS = require('./charReplacementCs');

class StrategyFactory {
    static strategies = {};
    static register(name, strategy) {
        this.strategies[name] = strategy;
    }
    static get(name) {
        return this.strategies[name];
    }
}
const register = () => {
    StrategyFactory.register("CharReplacementUppercase", new CharReplacementUppercase());
    StrategyFactory.register("CharReplacementUppercaseSingleQuote", new CharReplacementUppercaseSingleQuote());
    StrategyFactory.register("XSLT", new XSLT());
    StrategyFactory.register("CharReplacementDate", new CharReplacementDate());
    StrategyFactory.register("ColObjectNameReplacement", new ColObjectNameReplacement())
    StrategyFactory.register("CharReplacementCS",new CharReplacementCS())
    //StrategyFactory.register("CDS", new CDS());
};
register();
module.exports = StrategyFactory;