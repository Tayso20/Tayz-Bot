const { ownerid, prefix } = require("../../botconfig.json");

module.exports = {
    config: {
        name: "shutdown",
        description: "shuts down the bot!",
        usage: `${prefix}shutdown`,
        category: "owner",
        accessableby: "Bot Owner",
        aliases: ["botstop"]
    },
    run: async (bot, message, args) => {

    if(message.author.id != "387138288231907329") return message.channel.send("You're the bot the owner!")

    try {
        await message.channel.send("Bot is shutting down...")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
    


    }
}