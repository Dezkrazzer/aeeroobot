const Discord = require("discord.js"); 

exports.run = async(client, message, args)  => {
  
 if (!message.member.hasPermission("MANAGE_MESSAGES")){ 
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle("Sory, You Don't Have Permission To warn Members");
return message.channel.send(embed);
  }

let f = args.slice(1).join(" ");  
if(!f) return message.reply("Please give a reason! Usage: ```]warn <@mention> <reason>```");  
let users = message.mentions.users.first()
let a = message.guild.name
 

let embed = new Discord.RichEmbed()
.setTitle("Warn log")
.setColor("RED")
.addField("User warned", `${users}`)
.addField("Reason", `${f}`)
.addField("Moderator", message.author.tag)

message.channel.send(embed)



message.delete(); 
message.channel.send(`<:Accept:533788316093513728> | Alrights! ${users} has been warned for **${f}**`)
client.channels.get("533950352790257665").send(`<:Accept:533788316093513728> | Succes! ${users} (${users.id}) from server **${a}** has been warned for **${f}**`)
client.users.get(users.id).send(`You were warned in **${a}** for: ${f}`);  
}


exports.help = {
name: "warn"
}