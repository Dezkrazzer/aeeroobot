const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args, prefix) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No no no.");
    if (!args[0] || args[0 == "help"]) return message.reply("Usage: !setprefix <desired prefix here>");

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  
    if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: ']'
    };
  }

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });

    let sEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Prefix has been Set!")
        .setDescription(`Set to ${args[0]}`);

    message.channel.send(sEmbed);

}

module.exports.help = {
    name: "setprefix"
}