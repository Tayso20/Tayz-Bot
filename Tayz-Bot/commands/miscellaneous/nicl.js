const Discord = require("discord.js");
const { MessageEmbed  } = require("discord.js");
const { prefix } = require("../../botconfig.json");


module.exports = {
    config: {
        name: "nick",
        usage: `${prefix}nick <New Nick>`,
        category: "miscellaneous",
        description: "Changes Nick name.",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
        message.member.setNickname(args.slice(0).join(" "))
     }




}
