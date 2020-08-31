const db = require("quick.db")

exports.run = (client, message, args) => {
  
  
  db.set(`status.${message.author.id}`, "Hey There! Iam using Discord ")//db.get status default tadi
  message.channel.send(`Your status was Remove`)
}

module.exports.help = {
  name: "delstatus"
}