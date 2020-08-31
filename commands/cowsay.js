const Discord = require("discord.js");
var cowsay = require("cowsay");

exports.run = (client, msg, args) => {

    let say = args.join(" "); //buat args nya atau kalimat yang ingin dimasukan 
if(!say) return msg.reply("Please provide a say! Usage: ```]cowsay <text>```");

  msg.delete()
    msg.channel.send("```" + cowsay.say({
        text : say
    }) + "```")
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cowsay'
};