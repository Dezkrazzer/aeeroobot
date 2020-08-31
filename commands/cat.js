const Discord = require('discord.js'),
    superagent = require('superagent');
module.exports.run = async (bot, message, args) => {
  
    let {
        body
    } = await superagent
        .get(`http://aws.random.cat/meow`);
    const catembed = new Discord.RichEmbed()
        .setTitle('Here is your random cat:')
        .setColor("#fc621b")
        .setImage(body.file)
    message.channel.send(catembed);
    console.log(`${message.author.tag} (${message.author.id}) using cat command on ${message.guild.name}!`)
}

module.exports.help = {
  name: "cat"
}