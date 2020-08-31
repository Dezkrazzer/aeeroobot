const Discord = require("discord.js")


  //const embed = new Discord.RichEmbed()
  //.setTitle("Here your image:")
  //.setImage("https://media.giphy.com/media/8JTqi5W2gkAe2kPmgb/giphy.gif")
 // .setImage("https://media.giphy.com/media/1swu6SMKAHR9bKJ2l3/giphy.gif")

 // message.channel.send(embed)
  
//}

//module.exports.help = {
//name:"image"
//


exports.run = async (client, message, args, level) => {  

var gifs = ["https://media.giphy.com/media/8JTqi5W2gkAe2kPmgb/giphy.gif",
            "https://media.giphy.com/media/1swu6SMKAHR9bKJ2l3/giphy.gif", 
            "https://media.giphy.com/media/8JTqi5W2gkAe2kPmgb/giphy.gif"]
            
            var temp = gifs[Math.floor(Math.random() * 3)]
            var embed = new Discord.RichEmbed()
                .setColor(0x2186c0)
                .setAuthor("Gifs", client.user.avatarURL)
                .setImage(temp)
            message.channel.send(embed);
}
            
exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: "User"
};

exports.help = {
  name: "image",
  category: "Miscelaneous",
  description: "Gif",
  usage: "gif"
};