const Discord = require('discord.js');
const moment = require("moment");
const db = require("quick.db")


exports.run = async (bot, message, args) => { 
  let user = message.mentions.users.first() || message.author
  var balance = db.get(`userBalance.${user.id}`)
  let xp = require("../xp.json");
   let curlvl = xp[message.author.id].level;
  let curxp = xp[message.author.id].xp;
let status = db.get(`status.${user.id}`)
if(!status) return   db.set(`status.${message.author.id}`, "Hey There! Iam Using DosuDez✘")
  let rank = db.get(`rank.${message.author.id}`)
  let pickaxes = db.get(`pickaxe.${message.author.id}`)
  
  

  let pickaxe; // wait
  if (pickaxes == 'iron') {
     pickaxe = '<:Iron_Pickaxe:542271493417992223>' //:v
  } else if (pickaxes == 'diamond') {
     pickaxe = `<:Diamond_Pickaxe:542271517006757889>` 
  } else if (pickaxes == 'emerald') {
     pickaxe = `<:Emeral_pickaxe:542271541178793995>`
  } else {
     pickaxe = '<:Wooden_Pickaxe:542271456537477120>';
  }
  // wait
  if (rank == 'ELITE') {
     rank = 'ELITE' //:v
  } else if (rank == 'PLATINUM') {
     rank = `PLATINUM` 
  } else if (rank == 'MAGISTRA') {
     rank = `MAGISTRA`
  } else {
     rank = 'GUEST';
  }
  const embed = new Discord.RichEmbed()

  .setAuthor(`${user.username} Profile's`, user.avatarURL) // display?
  .setColor('#91e244') 
  .setThumbnail(user.avatarURL)   
  .addField(':pencil:  Status', `\`\`\`\n${status}\n\`\`\``) 
  .addField(':green_apple: Reputation', db.get(`reputation.${user.id}`) ? db.get(`reputation.${user.id}`) : 0, true)
  .addField(':moneybag: Balance', balance ? balance : 0, true)
  .addField(':up: Level', `${curlvl} (XP:${curxp})`, true)
  //.addField(':hourglass: XP', `${curxp}`, true)
  .addField(":pick: Pickaxe", `Pickaxe now : ${pickaxe}`, true)
  .addField(':label: Rank', `\`\`\`\n${rank}\n\`\`\``)
  .setImage('https://cdn.discordapp.com/attachments/519028852647919648/542879692622004245/multicolours_1.gif')
  .setFooter('Requested By' + `${user.username}#${user.discriminator}`) 
  .setTimestamp() 

  message.channel.send(embed);
  bot.on('error', error => console.error(error));
}
module.exports.help = {
  name: "profile",
  category: "ECONOMY"
}