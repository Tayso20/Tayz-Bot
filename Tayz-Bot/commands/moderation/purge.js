
const { MessageEmbed } = require("discord.js")
const { redlight } = require("../../colours.json");
const { ownerid, prefix } = require("../../botconfig.json");


module.exports = {
    config: {
        name: "purge",
        description: "Mutes a member in the discord!",
        usage: `${prefix}mute <user> <reason>`,
        category: "moderation",
        accessableby: "Members",
        aliases: ["m", "nospeak"]
    },
    run: async (bot, message, args) => {

const deleteCount = parseInt(args[0], 10);


        const user = message.mentions.users.first();
        const channel = message.channel
        if(message.member.hasPermission("MANAGE_MESSAGES")){
            if(!deleteCount || deleteCount <= 2 || deleteCount > 100)
                return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
                let fetched;
                if(user != 'undefined'){
                    fetched = await channel.messages.fetch({limit: deleteCount});
                } else {
                const filterBy = user ? user.id : Client.user.id;
                fetched = messages.filter(m => m.author.id === filterBy).array().slice(0, deleteCount);
            }
            message.channel.bulkDelete(fetched)
          .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        } else {
            message.reply("Sorry, you don't have permissions for that!")
        }
    }}