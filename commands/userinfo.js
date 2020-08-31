const Discord = require('discord.js');
const moment = require("moment");
const LOL =
      {
        "false": "Human",
        "true": "Bot"
      }
let presence = {
"online": "**<:ONLINE:569348522755883020> Online**",
"dnd": "**<:DND:569348473846104085> Do Not Disturb",
"idle": "**<:IDLE:569348543907758101>  Idle**",
"offline": "**<:OFFLINE:569348574442291229> Offline/Invisible**"
}

module.exports.run = async (bot, message, args) => { 
  let user = message.mentions.users.first() || bot.users.get(args[0]) || message.author
  
  let abc = user.presence.game
  
  if (!abc || abc === null) return message.channel.send('No current playing')
  if (!abc || abc === undefined) return message.channel.send('No current playing')
  
  
  
  
  const member = message.guild.member(user);
  
  const embed = new Discord.RichEmbed()

  .setAuthor(`${user.username} Userinfo card`, user.avatarURL) 
  
  .setColor('RANDOM') 
  .setThumbnail(user.avatarURL) 
  .addField(':globe_with_meridians: General:', `>**Name**:${user} | \`${user.tag}\`\n>**ID**: ${user.id}\n>**Account info**: ${user.createdAt}`)
  .addField(':gear: Atributes:', `>**User**: ${LOL[user.bot]}\n>**Presence**: ${presence[user.presence.status]}\n>**Game**: ${abc}`)
  .addField(":link: Other information:", `>**Last message**: ${user.lastMessage} | \`${user.lastMessageID}\`\n>**Joined server**: (${moment(member.joinedAt, "dd").fromNow()}), ${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`) //The time the user was created || .createdTimestamp - The timestamp the user was created at//A discriminator/tag based on username for the user Ex:- 0001 //The DM between the client's user and this user || If Nothing Returns "Null"
  .addField(":bar_chart: Roles", member.roles.map(roles => `<@&${roles.id}>`).join(', '))//The Discord "tag" for this user || Ex:- Sai Chinna#6718//The username of the user || Ex:- 
   
  .setFooter('Requested By' + `${message.author.username}#${message.author.discriminator}`) //Change To Anything As You Wish
  .setTimestamp() //The timestamp of this embed

  message.channel.send({embed});
}

module.exports.help = {
 name: "userinfo"
}