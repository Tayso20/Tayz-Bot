const { prefix } = require("../../botconfig.json");
const active = new Map();

module.exports = async (bot, message) => { 
    if(message.author.bot || message.channel.type === "dm") return;



    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    let ops = {
        active, active
    }

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args, ops)  
}