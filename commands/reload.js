const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  if(message.author.id !== '515930206557569036' && message.author.id !== '504029652223000603') return message.reply("Sorry, Only my owner can use this!")

  try{
    delete require.cache[require.resolve(`./${args[0]}.js`)];

    return message.reply(`Successfully reloaded **${args[0]}.js**`).then(m => m.delete(10000))
     }catch(e){
     return message.reply(`Unable to reload ${args[0]}`).then(m => m.delete(5000));
     }
}; 

exports.help = {
  name: "reload",
  category: "OWNER"
}