

const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  let user = args[0];
if (!user) return message.channel.send('Please, provide a instagram account name! Usage: ```]instagram <Account name>```')
  
const embed = new Discord.RichEmbed()
.setTitle("Instagram Account")
.setColor("#ee3cbd")
.setDescription(`This is an Instagram account from **${user}**`)
.setThumbnail("https://cdn.discordapp.com/attachments/519028852647919648/555667917543309323/IG_logo.png")
//.addField(":point_down: Instagram link: :point_down:", "[Click here](https://instagram.com/${user}")
.addField(":point_down: Instagram link: :point_down:", `[Click here](https://instagram.com/${user})`)
message.channel.send(embed)
//message.channel.send(`Dont forget to follow https://instagram.com/${user}`)
  
  
  
    
}

module.exports.help = {
  name:"instagram"
}