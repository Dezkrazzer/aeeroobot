const Discord = require(`discord.js`);

exports.run = (client, message, args) => {
  let usuario = client.users.get(args[0]) || message.mentions.users.first()
  if(!usuario) return message.reply("Please mention a user! Usage: ```]serverw <@mention>```")
let servers = client.guilds.filter(g => g.members.has(usuario.id)).map(g => '`'+g.name+'`').join(', ')
  const embed = new Discord.RichEmbed()
  .setTitle('Servers where it is')
  .setDescription(servers)
  .setColor("RANDOM")
  message.channel.send(embed)
  
}

exports.help = {
  name:"serverw"
}