const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! :kissing_heart:")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("#df388c")
    .setFooter("Bot Version: 1.0", bot.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}

module.exports.help = {
  name: "hug"
}