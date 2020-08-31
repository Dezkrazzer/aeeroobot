const Discord = require('discord.js');

exports.run = (bot, message, args, tools) => {

  let presence = {
"online": "**<:ONLINE:569348522755883020> Online**",
"dnd": "**<:DND:569348473846104085> Do Not Disturb",
"idle": "**<:IDLE:569348543907758101>  Idle**",
"offline": "**<:OFFLINE:569348574442291229> Offline/Invisible**"
}
  
	const embed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} membercount`)
		.setColor('RANDOM')
		.addField('Members', `:busts_in_silhouette: **${message.guild.memberCount}**`, true)
		.addBlankField(true)
		.addField('Humans', `:boy: **${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Bots', `:robot: **${message.guild.members.filter(member => member.user.bot).size}**`, true)
  .addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** <:ONLINE:569348522755883020> Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** <:IDLE:569348543907758101>  Idle\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** <:DND:569348473846104085> Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** <:OFFLINE:569348574442291229> Offline/Invisible`, true)
	message.channel.send(embed);
};

module.exports.help = {
name:"membercount"
}