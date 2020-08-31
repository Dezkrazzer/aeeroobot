const Discord = require('discord.js')
const moment = require("moment");
exports.run = (bot, message, args) => {
let embed = new Discord.RichEmbed()

.addField("⏰ Jam", `${moment().utcOffset('+0700').format("HH:mm A")} WIB \n${moment().utcOffset('+0800').format("HH:mm A")} WITA \n${moment().utcOffset('+0900').format("HH:mm A")} WIT`)

message.channel.send(embed)
}

module.exports.help = {
  name:"time"
}