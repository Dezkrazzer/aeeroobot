const db = require('quick.db')
const moment = require("moment");
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

var user = message.mentions.users.first() || message.author;
        
        var balance = db.get(`userBalance.${user.id}`)
        
        if (balance === null) balance = 0;
        
        var embed = new Discord.RichEmbed()
        .setTitle('Coin Balance')
        .setDescription(`${user.username}, **your balance:\n:dollar: $${balance}**`)
        .setColor('#ffffff')
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(embed)

}

   exports.conf = {
     aliases: ["coins"],
     cooldown: 5
   }
  
module.exports.help = {
  name: "balance",
  description: "ECONOMY",
  usage: "balance"
}