const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Aeeroo | Vote")
  .setDescription("We really need a vote from you. Because vote is your support to us. Please vote for Aeeroo bot because it means a lot to us")
  .addField(":point_down: Vote :point_down:", "[Click here](https://discordbots.org/bot/549575603959889921/vote)")
  .setColor("#35ec19")
  .setFooter("Aeeroo", bot.user.displayAvatarURL) //avatar
   message.channel.send(embed)
}

module.exports.help = {
 name: "vote"

}  