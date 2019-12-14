const fetch = require("node-fetch");




module.exports = {
    config: { 
        name: "djs",
        aliases: ["docs"],
        usage: "(command)",
        category: "miscellaneous",
        description: "Makes ascii art.",
        accessableby: "Members",

    },
   
    run: async (bot, message, args) => {
        
let query = args.join(' ');
let djsurl = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

if(!query) return message.channel.send("I need a keyword to search for my manns.")
fetch(djsurl)
.then(res => res.json())
  .then(embed => {
    if(embed && !embed.error) {
      message.channel.send({ embed });
    } else {
      message.channel.send(`Sorry, but \`${query}\` isn't in the discord.js-stable documentation.`);
    }
  })

  .catch(e => {
    console.error(e);
    message.channel.send("There was an error, try again later.")
    })
        
}}