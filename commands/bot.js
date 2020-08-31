const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Aeeroo | Profile")
  .addField(":point_down: Bot profile :point_down:", "[Click here](https://discordbots.org/bot/549575603959889921)")
  .setColor("RANDOM")
  .setFooter("Aeeroo", bot.user.displayAvatarURL) //avatar
   message.channel.send(embed)
}

module.exports.help = {
 name: "bot"

}  