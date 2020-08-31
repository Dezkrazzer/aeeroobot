const Discord = require("discord.js")

 exports.run = async (client, message, args) => {
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   
      const embed = new Discord.RichEmbed
      .setTitle("Used command")
      .setColor("RANDOM")
      .addField("Author:" `${message.author}`)
      .addField("Command:" `${cmd}`)
      .addField("Guild:" `${message.guild.name}`)
      
      client.guilds.get("519028852647919646").channels.get("555660070428475413").send(embed)
    }