const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
   let rank = db.get(`rank.${message.author.id}`)
  let bal = db.get(`userBalance.${message.author.id}`)
  
      const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Please choose a type of new rank.`)
        .setColor(`RANDOM`)
        .setDescription('We have: `ELITE`, `PLATINUM`, and `MAGISTRA`');
    message.channel.send({
        embed: ahkEmbed
    });
  
    message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("ELITE")) {
          if (bal <= '120000') return message.reply(`Maaf kamu misqueen`);
          const ahkkEmbed = new Discord.RichEmbed()
          .setTitle(`I set your rank to ELITE`)
          .setColor(`RANDOM`)
          //.setFooter(`Pickaxe`)
          //.setImage(`https://cdn.discordapp.com/emojis/542271493417992223.png?v=1`)
          message.channel.send(ahkkEmbed)
          db.set(`rank.${message.author.id}`, 'ELITE')
          db.subtract(`userBalance.${message.member.id}`, '120000')
            return;
          
        } //wait
        if (msg.content.startsWith("PLATINUM")) {
          if (bal <= '300000') return message.reply(`Maaf kamu misqueen`);
          const ahkkkEmbed = new Discord.RichEmbed()
          .setTitle(`I set your rank to PLATINUM`)
          .setColor(`RANDOM`)
          //.setFooter(`Pickaxe`)
          //.setImage(`https://cdn.discordapp.com/emojis/542271517006757889.png?v=1`)
          message.channel.send(ahkkkEmbed)
          db.set(`rank.${message.author.id}`, 'PLATINUM')
          db.subtract(`userBalance.${message.member.id}`, '300000')
          return;
                
        }
        if (msg.content.startsWith("MAGISTRA")) {
          if (bal <= '700000') return message.reply(`Maaf kamu misqueen`);
          const ahkkkkEmbed = new Discord.RichEmbed()
          .setTitle(`I set your rank to MAGISTRA`)
          .setColor(`RANDOM`)
          //.setFooter(`Pickaxe`)
          //.setImage(`https://cdn.discordapp.com/emojis/542271541178793995.png?v=1`)
          message.channel.send(ahkkkkEmbed)
          db.set(`rank.${message.author.id}`, 'MAGISTRA')
          db.subtract(`userBalance.${message.member.id}`, '700000')
          return;
        }
      
    });
}
  
  
  


exports.help = {
  name:"rank"
}


