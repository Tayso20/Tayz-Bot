const { MessageEmbed  } = require("discord.js")
const { red_light } = require("../../colours.json");
const { ownerid, prefix } = require("../../botconfig.json");


module.exports = {
    config: {
        name: "userinfo",
        description: "Pulls the userinfo of yourself or a user!",
        usage: `${prefix}userinfo <user>`,
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["ui"]
    },
    run: async (bot, message, args) => {
    let uEmbed = new MessageEmbed()
        .setColor(red_light)
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created At:**", `${message.author.createdAt}`, true)
        .setFooter(`TestBot | Footer`, bot.user.displayAvatarURL);

    message.channel.send(uEmbed);
    }
}
