const Discord = require("discord.js")

module.exports.run = (client, message, args) => {
  let image = message.guild.iconURL; 
        let embed = new Discord.RichEmbed()
            .setAuthor(`Avatar server: ${message.guild.name}`)   
            .setColor("RANDOM") 
            .setImage(image) 
      
        message.channel.send(embed);
  
  
 
}

module.exports.help = {
  name:"avaserver"
}