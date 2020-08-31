const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
  let pickaxe = db.get(`pickaxe.${message.author.id}`)
  let bal = db.get(`userBalance.${message.author.id}`)
  
      const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Please choose a type of new Pickaxe.`)
        .setColor(`RANDOM`)
        .setDescription('We have: `iron`, `diamond`, and `emerald`');
    message.channel.send({
        embed: ahkEmbed
    });
  
    message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("iron")) {
          if (bal <= '80000') return message.reply(`Maaf kamu misqueen`);
          const ahkkEmbed = new Discord.RichEmbed()
          .setTitle(`I set yout pickaxe to`)
          .setColor(`RANDOM`)
          .setFooter(`Pickaxe`)
          .setImage(`https://cdn.discordapp.com/emojis/542271493417992223.png?v=1`)
          message.channel.send(ahkkEmbed)
          db.set(`pickaxe.${message.author.id}`, 'iron')
          db.subtract(`userBalance.${message.member.id}`, '80000')
            return;
          
        } //wait
        if (msg.content.startsWith("diamond")) {
          if (bal <= '200000') return message.reply(`Maaf kamu misqueen`);
          const ahkkkEmbed = new Discord.RichEmbed()
          .setTitle(`I set your pickaxe to`)
          .setColor(`RANDOM`)
          .setFooter(`Pickaxe`)
          .setImage(`https://cdn.discordapp.com/emojis/542271517006757889.png?v=1`)
          message.channel.send(ahkkkEmbed)
          db.set(`pickaxe.${message.author.id}`, 'diamond')
          db.subtract(`userBalance.${message.member.id}`, '200000')
          return;
                
        }
        if (msg.content.startsWith("emerald")) {
          if (bal <= '400000') return message.reply(`Maaf kamu misqueen`);
          const ahkkkkEmbed = new Discord.RichEmbed()
          .setTitle(`I set your pickaxe to`)
          .setColor(`RANDOM`)
          .setFooter(`Pickaxe`)
          .setImage(`https://cdn.discordapp.com/emojis/542271541178793995.png?v=1`)
          message.channel.send(ahkkkkEmbed)
          db.set(`pickaxe.${message.author.id}`, 'emerald')
          db.subtract(`userBalance.${message.member.id}`, '400000')
          return;
        }
      
    });
}
                                                     
                        
                
    
                                                     
exports.help = {
    name: 'pickaxe'

}