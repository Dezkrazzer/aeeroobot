
const Discord = require("discord.js")
const db = require("quick.db")
const bot = new Discord.Client();
const ms = require("parse-ms")


exports.run = async (client, message, args) =>  {
  var msg = message
  let cooldown = 8.64e+7
  let mentioned = (msg.mentions.users.first())
  if(!mentioned) return message.channel.send(`<@${message.author.id}>.. Oh wait! You can't vote yourself!`);
  if(mentioned.id === msg.author.id) return message.channel.send("Can't rep yourself")
  let cooldownt = db.get(`cooldown.${msg.author.id}`)
  let timeObj = ms(cooldown - (Date.now() - cooldownt))
  if (!mentioned) return msg.channel.send("Please mention a user!")
  try {
  if (cooldownt !== null && cooldown - (Date.now() - cooldownt) > 0) {
     msg.channel.send(`You have given points of repurtation some time ago. Please wait on **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s**`)        
  
  } else { 
    db.add(`reputation.${mentioned.id}`, + 1) 
    db.set(`cooldown.${msg.author.id}`, Date.now()) 
    msg.channel.send(`:tada: You given a rep **@${mentioned.tag}**`) 
  }
  } catch (e) {
    console.log(e)
  }
}

module.exports.help = {
  name: "rep",
  category: "ECONOMY"
}