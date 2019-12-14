const { Client, Collection } = require("discord.js");
const Discord = require("discord.js")

const { token } = require("./botconfig.json");
const bot = new Client();

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));



 //working edit log
    //urgent keep out side of event handler  ye
    
    bot.on('messageUpdate', async(oldMessage, newMessage) =>{
        if(oldMessage.content === newMessage.content) return;
        if(oldMessage.author.bot) return;
        
    
        let logEmbed = new Discord.MessageEmbed()
        .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL())
        .setThumbnail(oldMessage.author.avatarURL())
        .setColor('RANDOM')
        .setDescription('A message from a user was edited :)')
        .addField('Before', oldMessage.content, true)
        .addField('After', newMessage.content, true)
        .setTimestamp();
    
        let loggingChannel = newMessage.guild.channels.find(ch => ch.name === 'logs')
        if(!loggingChannel) return;
    
        loggingChannel.send(logEmbed);
    })

    //working MEssage Delete log
    //urgent Keep out side of event handler 

    bot.on('messageDelete', async (dMessage) => {
        if(dMessage.author.bot) return;
        console.log(`${dMessage.content}`)
        let logEmbed = new Discord.MessageEmbed()
        .setAuthor(dMessage.author.tag, dMessage.author.avatarURL())
        .setThumbnail(dMessage.author.avatarURL())
        .setColor('ff0000')
        .setDescription('A message from a user was deleted')
        .addField('Content', dMessage.content, true)
        .setTimestamp();

        let loggingChannel = dMessage.guild.channels.find(ch => ch.name === 'logs')
        if(!loggingChannel) return;

        loggingChannel.send(logEmbed);
    })

bot.login(token);