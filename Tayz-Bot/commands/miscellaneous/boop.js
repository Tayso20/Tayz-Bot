const Discord = require("discord.js");
const { MessageEmbed  } = require("discord.js");
const { prefix } = require("../../botconfig.json");


module.exports = {
    config: {
        name: "boop",
        usage: `${prefix}boop <user>`,
        category: "miscellaneous",
        description: "Enlarges an emoji.",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {

        let boop = message.mentions.members.first() || message.guild.members.get(args[0])
    if(boop.id === '387138288231907329'){
        message.reply('Fuck off')
     } else {
        if(!boop) return message.channel.send("Please provide a user to BOOP!")
        message.channel.send(`✅ Succesfully Booped **${boop.user.tag}**!`)
     

     }




}}
