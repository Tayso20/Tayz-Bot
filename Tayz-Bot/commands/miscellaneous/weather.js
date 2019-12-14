const weather = require('weather-js');
const { MessageEmbed  } = require("discord.js");
const { ownerid, prefix } = require("../../botconfig.json");



module.exports = {
    config: {
        name: "weather",
        description: "Shows Wetaher of Place",
        usage: `${prefix}weather <place>`,
        category: "miscellaneous",
        accessableby: "member",
        aliases: ["temp"]
    },
    run: async (bot, message, args) => {
if (!args[0]) return message.channe.send(`Please provide a location.`);
        weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) { 
            if (err) message.channel.send(err);
            if (result === undefined || result.length === 0) return message.channel.send('**Please enter a valid location.**'); 
            var { current, location } = result[0];
            message.channel.send(
                 new MessageEmbed ()
                .setAuthor(`Weather for ${current.observationpoint}`)
                .setDescription(`**${current.skytext}**`) 
                .setColor(0x00AE86) 
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)
                .setThumbnail(current.imageUrl) 
            );
        });
    }
}
