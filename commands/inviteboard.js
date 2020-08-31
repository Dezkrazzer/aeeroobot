const Discord = require('discord.js'), 
      arraySort = require('array-sort');

exports.run = async (client, message, args, color) => {

    let invites = await message.guild.fetchInvites().catch(error => { 
        return message.channel.send('Pleas enable perms `Manage server`');
    }) 

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true }); 

    let possibleinvites = [];
    let index = 0;
    invites.forEach(function(invites) {
        possibleinvites.push(`**${++index}**. 🔸 **${invites.inviter.tag}** 》 \`${invites.uses}\` **invites**`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`🏆 Invite Leaderboard🏆`)
        .setColor("RANDOM")
        .setDescription(`${possibleinvites.join('\n')}`)
        .setTimestamp();
    message.channel.send(embed);
}

exports.help = { 
  name : "inviteboard"
}