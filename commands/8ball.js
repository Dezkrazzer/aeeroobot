const Discord = require ("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[2]) return message.reply("Please ask a question! Usage: ```]8ball <question>```");
  let replies = ["Yes, Certainly :8ball:", "No,never :8ball:", "please ask again :8ball:"]
  let result = Math.floor((Math.random() * replies.length));
  
  let question = args.slice().join(" ");
  
  let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username + " asks: " + question)
  .setColor("RANDOM")
  .addField("answer", "Asked by " + message.author.tag + "\nAnswer: " + replies[result] + "")
  
  message.channel.send({embed});
};
module.exports.help = {
  name: "8ball",
  category: "ECONOMY"
}