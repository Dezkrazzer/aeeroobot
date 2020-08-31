const Discord = require("discord.js");

exports.run = (client, message, args, level) => {
  const emoji = client.emojis.get(args[0]);
 
  const eembed = new Discord.RichEmbed()
  .setAuthor("Emote Info"," https://discordemoji.com/assets/emoji/owo.png")
  .addField("» Emote Name",emoji.name)
   .setThumbnail(`https://images-ext-1.discordapp.net/external/QKqSNqxF0K2GDQBh8wZYUfubEVy1XEuaV4yM8jLVBl0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/429066847258804255/3e99d64315bdfb42aef5b89a6e6f7127.png?width=473&height=473`)
    .addField("» Emote Id",emoji.id)
    .addField("» Created At",emoji.createdAt)
   
if(isNaN(args[0])) return message.channel.send("Emote Name bust be NaN or an id")
  
  message.channel.send(eembed)

}

module.exports.help = {
name:"einfo"
}