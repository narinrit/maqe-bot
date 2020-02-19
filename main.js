const MaqeBot = require('./maqeBot');

const maqeBot = new MaqeBot(process.argv[2]);

console.log(maqeBot.toString());

