const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
let pickaxes = db.get(`pickaxe.${message.author.id}`)

  let pickaxe; // wait
  if (pickaxes == 'iron') {
     pickaxe = '<:Iron_Pickaxe:542271493417992223>' //:v
  } else if (pickaxes == 'diamond') {
     pickaxe = `<:Diamond_Pickaxe:542271517006757889>` 
  } else if (pickaxes == 'emerald') {
     pickaxe = `<:Emeral_pickaxe:542271541178793995>`
  } else {
     pickaxe = '<:Wooden_Pickaxe:542271456537477120>';
  }
 
  console.log(pickaxe)
    //let result = Math.floor(Math.random() * 25)    
    var user = message.mentions.users.first() || message.author;
    //var balance = db.get(`userBalance.${user.id}`)
    let item = [ "Coal", "Iron", "Diamond", "Emerald"]
    let jobr = item[Math.floor(Math.random() * item.length)]

    if (jobr === "Coal") {
    message.channel.send(`${pickaxe} | **${message.author.tag}** You got as a **Coal** and get \`50\``)
    db.add(`userBalance.${message.member.id}`, 50)
    }
  if (jobr === "Iron") {
    message.channel.send(`${pickaxe} | **${message.author.tag}**  You got as a **Iron** and get \`100\``)
    db.add(`userBalance.${message.member.id}`, 100)
    } 
  if (jobr === "Diamond") {
    message.channel.send(`${pickaxe} | **${message.author.tag}**  You got as a **Diamond** and get \`300\``)
    db.add(`userBalance.${message.member.id}`, 300)
    }
  if (jobr === "Emerald") {
    message.channel.send(`${pickaxe} | **${message.author.tag}**  You got as a **Emerald** and get \`500\``)
    db.add(`userBalance.${message.member.id}`, 500)
    }
    //message.react('✅')
}

exports.help = {
    name: "mine"
}