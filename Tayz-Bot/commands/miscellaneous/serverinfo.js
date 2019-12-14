const {MessageEmbed } = require("discord.js");
const moment = require("moment");
const {prefix} = require("../../botconfig.json");

module.exports = { 
    config: {
        name: "serverinfo",
        description: "Gets Guild Info",
        usage: `${prefix}serverinfo`,
        category: "miscellaneous",
        accessableby: "guildinfo",
    },
  run: async (bot, message, args) => {
    const statues = ["online", "dnd", "idle"];

    const embed = new MessageEmbed ()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField("🆔 Server ID", message.guild.id, true)
      .addField("📅 Created At", moment(message.guild.createdAt).format("LLL") + "\n" + moment(message.guild.createdAt).fromNow(), true)
      .addField("👑 Owner", message.guild.owner, true)
      .addField(`👥 Members [${message.guild.memberCount}]`, `**${message.guild.members.filter(m => statues.includes(m.user.presence.status)).size}** Online`, true)
      .addField(`💬 Channels [${message.guild.channels.filter(c => c.type != "category").size}]`, `**${message.guild.channels.filter(c => c.type == "text").size}** Text | **${message.guild.channels.filter(c => c.type == "voice").size}** Voice`, true)
      .addField("🌎 Other", `**Region: ** ${message.guild.region} \n**Verification Level: ** ${message.guild.verificationLevel}`, true)
      .addField(`🔐 Roles [${message.guild.roles.size}]`);

    embed.fields[6].value = message.guild.roles.sort((a, b) => b.position - a.position).map(r => r).slice(1).join(", ");
    message.channel.send(embed).catch(err => {
      if (err.name == "DiscordAPIError" || err.name == "RangeError") {
        embed.fields[6].value = "Sorry but there is too many roles 😦";
        message.channel.send(embed);
      } else console.error(err);
    });
  }
}