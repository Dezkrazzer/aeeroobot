const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  
  
    let result = Math.floor(Math.random() * 25)
    var user = message.mentions.users.first() || message.author;
    var balance = db.get(`userBalance.${user.id}`)
    let job = [ "Chef", "Hacker", "Developer", "Programmer"]
    let jobr = Math.floor(Math.random() * job.length)
    message.channel.send(`:briefcase: You work as a **${job[jobr]}** and get \`$${result}\``)
    db.add(`userBalance.${message.member.id}`, result)
}

exports.help = {
    name: "work"
}