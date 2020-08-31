const Discord = module.require('discord.js');

const servico =
{
    'singapore' : ':flag_sg: Singapore',
    'brazil' : ':flag_br: Brazil',
    'eu-central' : ':flag_eu: Central Europe',
    'hongkong' : ':flag_hk: Hong Kong',
    'japan' : ':flag_jp: Japan',
    'russia' : ':flag_ru: Russia',
    'southafrica' : ':flag_za: South Africa',
    'sydney' : ':flag_au: Sydney, Australia',
    'us-central' : ':flag_us: US Central',
    'us-east' : ':flag_us: US East',
    'us-south' : ':flag_us: US South',
    'us-west' : ':flag_us: US West',
    'eu-west' : ':flag_eu: Western Europe'
}

let presence = {
"online": "**<:ONLINE:569348522755883020> Online**",
"dnd": "**<:DND:569348473846104085> Do Not Disturb",
"idle": "**<:IDLE:569348543907758101>  Idle**",
"offline": "**<:OFFLINE:569348574442291229> Offline/Invisible**"
}

const verification =
{
    '0' : 'None',
    '1' : 'Low',
    '2' : 'Medium',
    '3' : 'High',
    '4' : 'Extremely'
}


module.exports.run = async (client, message, args) => {
  let sicon = message.guild.iconURL;
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let waktu = message.guild.afkChannel
  let jembd = message.guild.afkTimeout
  let asu = message.guild.owner
  let tmpk = message.guild.ownerID
  let a = client.users.get(tmpk)
  
  if (waktu === null) waktu = 'No afk channel';
  if (waktu === undefined) waktu = 'No afk channel';
  
   if (jembd === null) waktu = 'No afk channel';
  if (jembd === undefined) waktu = 'No afk channel';

  let embed = new Discord.RichEmbed()
  .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL) // Will set text on top of embed to <guild name> - Informations, and will place guild icon next to it
  .setColor('RANDOM') // Will set color of embed
  .setThumbnail(sicon)
  .addField(":globe_with_meridians: General Infomation:", `>**Server name** ⟩⟩ ${message.guild.name} | [\`\`${message.guild.id}\`\`]\n>**Server region** ⟩⟩ ${servico[`${message.guild.region}`]}\n>**Verification level** ⟩⟩ ${verification[`${message.guild.verificationLevel}`]}\n>**Server created** ⟩⟩ Day: \`${day}\` Month: \`${month}\` Year: \`${year}\`\n>**Server roles** ⟩⟩ ${message.guild.roles.size}\n• ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ •`)
  .addField(":radio: Channel Information:", `>**Channel count** ⟩⟩ ${message.guild.channels.size}\n>**AFK channel** ⟩⟩ ${waktu}\n>**AFK Time** ⟩⟩ ${message.guild.afkTimeout}\n• ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ •`)
  .addField(":busts_in_silhouette: Member Information:", `>**Total** ⟩⟩ ${message.guild.memberCount}\n>**User** ⟩⟩ ${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}\n>**Bot** ⟩⟩ ${message.guild.members.filter(m => m.user.bot).size}\n\`${message.guild.members.filter(o => o.presence.status === 'online').size}\` <:ONLINE:569348522755883020> Online\n\`${message.guild.members.filter(i => i.presence.status === 'idle').size}\` <:IDLE:569348543907758101>  Idle\n\`${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}\` <:DND:569348473846104085> Do Not Disturb\n\`${message.guild.members.filter(off => off.presence.status === 'offline').size}\` <:OFFLINE:569348574442291229> Offline/Invisible\n• ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ •`)
  .addField(":crown: Owner Information:", `>**Name** ⟩⟩ ${message.guild.owner} | \`${asu.id}\`\n>**Presence Status** ⟩⟩ ${asu.presence.status}\n>**Account Info** ⟩⟩ ${a.createdAt}\n• ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ •`)
  .addField(":link: Properties Information:", `>**See server roles** ⟩⟩ \`]serverroles\`\n>**See server emojis** ⟩⟩ \`]serveremoji\`\n>**See server icon** ⟩⟩ \`]serveravatar\``)
  
 
  
   //.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** <:ONLINE:569348522755883020> Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** <:IDLE:569348543907758101>  Idle\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** <:DND:569348473846104085> Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** <:OFFLINE:569348574442291229> Offline/Invisible`, true)
  
  
  
  .setFooter('Requested By' + `${message.author.username}#${message.author.discriminator}`) 

  // And now we can send our embed
  return message.channel.send(embed);
}

exports.help = {
  name: 'serverinfo'
}