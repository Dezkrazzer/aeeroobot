const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Aeeroo | Web")
  .addField(":point_down: Web Official :point_down:", "[Click here](https://uqievanmadiun.wixsite.com/dosudez)")
  .setColor("#35ec19")
  .setFooter("Aeeroo", bot.user.displayAvatarURL) //avatar
   message.channel.send("We're sorry. The Aeeroo website is **MAINTENANCE**. Please be patient")
}

module.exports.help = {
 name: "web"

}  