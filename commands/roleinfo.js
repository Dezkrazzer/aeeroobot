const Discord = require('discord.js');
exports.run = (bot, message, args) => {
    // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    
    if (!role) role = message.member.highestRole;

  
    const embed = new Discord.RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`Role: ${role.name}`)
        .addField(':bust_in_silhouette: Members use this roles', role.members.size, true)
        .addField(':ribbon: Hex Code', role.hexColor, true)
        .addField(':calendar: Creation Date', role.createdAt.toDateString(), true)
        .addField(':round_pushpin: Editable', role.editable.toString(), true)
        .addField(':tools: Managed', role.managed.toString(), true)
        .addField(':scroll: ID', role.id, true);
    message.channel.send(embed)
    };
;
module.exports.help = {
  name:"roleinfo"
}