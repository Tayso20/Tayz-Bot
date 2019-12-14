const { MessageEmbed } = require('discord.js');
const { ownerid, prefix } = require("../../botconfig.json");


module.exports = { 
    config: {
        name: "roles",
        description: "Gets roles on server",
        usage: `${prefix}roles`,
        category: "miscellaneous",
        accessableby: "rolesinfo",
    },

    run: async (bot, message, args) => {

        const roles = message.guild.roles;
        const embed = new MessageEmbed()
            .setDescription(roles.map(r => `${r.name}`).join("\n"))
            
          message.channel.send(embed) 
    } 
}
