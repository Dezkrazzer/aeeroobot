const db = require("quick.db")

exports.run = (client, message, args) => {
  let status = args.join(" ")
  if (!status) return message.channel.send("Please set a status! Usage: ```]setstatus <status>```")
  db.set(`status.${message.author.id}`, status)
  message.channel.send(`Your status was set to \`\`\`\n${status}\n\`\`\``)
}

module.exports.help = {
  name: "setstatus"
}