const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, You don't have enought permission.");
  if(!args[0]) return message.channel.send("Usage: ```]purge (0/1000)```");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} message has been deleted!.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "purge",
  category: "MODERATION"
}