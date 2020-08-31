const Discord = require("discord.js");

exports.run = async (bot, msg, args) => {
  
  let member = msg.mentions.users.first() || msg.author;
  let avatarr = member.displayAvatarURL;
  if (avatarr.split(".")[3] == "gif") avatarr = member.avatarURL + "?size=2048";
  let avatarembed = new Discord.RichEmbed()
  
  .setColor("RANDOM")
  .setTitle(`${member.tag}`)
  .setDescription(`[Avatar link](${member.avatarURL})`)
  .setImage(avatarr)

  return msg.channel.send(avatarembed);

}

module.exports.help = {
  name: "avatar",
}