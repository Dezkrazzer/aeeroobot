const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("Sory, You Don't Have Permission To Kick Members");
return message.channel.send(embed);
  }
  if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`**${message.author.tag}** Sory,  Nao Tomori Don't Have Permissions \`KICK_MEMBERS\` Please Give Permissions \`KICK_MEMBERS\` Firts.`).then(msg=>msg.delete(5000))
  
  let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toKick) return message.channel.sendMessage("Can't Find User ! Mentions User Firts ! Usage: ```]kick <@mention> <reason>```");
  let reason = args.join(" ").slice(22);
  if (toKick.hasPermission("KICK_MEMBERS")) return message.channel.send("Hmm he Can't be kicked :(").then(msg => msg.delete(3000));
  
  if (toKick.highestRole.position < message.guild.member(client.user).highestRole.position) {
   message.guild.member(toKick).kick(reason);
   try {
    if (!reason) {
      toKick.send(`**${toKick.user.tag}** You Has Been kick From**${message.guild.name}**`)
    } else {
      toKick.send(`**${toKick.user.tag}** You Has Been Kick From **${message.guild.name}**
Reason: "${reason}"`);
    }
    let embedB = new RichEmbed()
    .setColor('RED')
    .setTitle('User Has Been kicked From Server')
    .addField(':bookmark: Username', toKick.user.username, true)
    .addField(':scroll: ID', toKick.id, true)
    .addField(':pencil: Reason', `${reason}`)
    message.channel.send(embedB);
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(`I Can't Kick **${toKick.user.tag}** Because His Role Is Better Than Me.`)
  }
}
 
exports.conf = {
  aliases: ['kick'],
  cooldown: '5'
}

exports.help = {
  name: "kick",
  description: 'Kick someone from your server [ADMIN ONLY]',
  usage: 'Kick [@mention someone] [Reason]',
  category: "MODERATION"
}