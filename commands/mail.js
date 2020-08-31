const Discord = require("discord.js"); 

exports.run = async(client, message, args)  => {
let users = message.mentions.users.first() 
if(!users) return message.reply("Please mention user first! Usage: ```]mail <@mention> <message>```")
let f = args.slice(1).join(" ");  
if(!f) return message.reply("Please provide a message! Usage: ```]mail <@mention> <message>");  

message.delete(); 
message.channel.send("```Mail has been sended!```")
client.users.get(users.id).send(`:incoming_envelope: You received email from @${message.author.tag} : ${f}`);  // sene
}

exports.help = {
name: "mail"
}