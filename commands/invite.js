const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Aeeroo | Invite Me!")
  .addField(":point_down: Invite :point_down:", "[Click here](https://discordapp.com/oauth2/authorize?client_id=549575603959889921&permissions=0&scope=bot)")
  .setColor("RANDOM")
  .setFooter("Aeeroo", bot.user.displayAvatarURL)
   message.channel.send(embed)
}

module.exports.help = {
 name: "invite"

}  