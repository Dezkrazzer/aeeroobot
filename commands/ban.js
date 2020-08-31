const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args) => { // if your cmd handler has different things than client, message etc change it

  let logs = message.guild.channels.find("name", "➢♦-ᴍᴏᴅᴇʀᴀᴛɪᴏɴ-ʟᴏɢs-♦", "logs", "moderation-logs", "mod-logs");
  if(!logs) return message.channel.send("Could not find a logs channel! I can't find channel with name `logs` | `moderation-logs` | `mod-logs`");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this commands!");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Please mention a user! Usage: ```]ban <@mention> <reason>```");

  let reason = args.join(" ");
  if(!reason) return message.reply("Please give a reason! Usage: ```]ban <@mention> <reason>```")

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("User Banned")
  .setFooter("User Ban Logs")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Banned User:", '${user}, ID: ${user.id}')
  .addField("Reason:", reason)
  .addField("Moderator:", '${message.author}, ID: ${message.author.id}')
  .addField("Time:", message.createdAt)
  .addField("Channel:", message.channel)

  logs.send(logsEmbed);
}
exports.help = {
  name: "ban"
}