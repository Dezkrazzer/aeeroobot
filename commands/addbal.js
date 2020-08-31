const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (bot, message, args) => {
   if (message.author.id !== "515930206557569036" || message.author.id !== "515930206557569036") return message.channel.send("You don't have permisson to run this command!")
  let amount = args.join(" ");
  if(!amount) return message.reply("]addbal [amount]")
  
  db.add(`userBalance.${message.member.id}`, amount)
  message.channel.send(`Succesfully added **${amount}**`)
  
  
  
  
  
  
  
  
  
}

exports.help = {
  name:"addbal"
}
