const { ownerid, prefix } = require("../../botconfig.json");

module.exports = { 
    config: {
        name: "ping",
        description: "PONG! Displays the api & bot latency",
        usage: `${prefix}ping`,
        category: "miscellaneous",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

    message.channel.send("Pinging...").then(m => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
        let response = choices[Math.floor(Math.random() * choices.length)]
        let r = Math.round(ping)
        m.edit(`${response}: Bot Latency: \`${Math.floor(ping)}\`, API Latency: \`${r}\``)
    })
  }
}
//save it and test