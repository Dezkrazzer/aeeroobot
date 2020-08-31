const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
let pickaxes = db.get(`pickaxe.${message.author.id}`)

  let pickaxe; 
  if (pickaxes == 'iron') {
   let random = Math.floor(Math.random() * 5)
   let random2 = Math.floor(Math.random() * 5)
   let embed = new Discord.RichEmbed()
   .setAuthor(`${message.author.username}`)
   .setColor("RANDOM")
   .addField("You mined", `<:Stone:565425620662878209> = ${random}\n<:Coal:565425644981321728> = ${random2}\nWith your <:Iron_Pickaxe:542271493417992223>`)
    //return message.channel.send(`<:Iron_Pickaxe:542271493417992223> | **${message.author.username}** You mined ${random} stone and ${random2} Coal`)
   return message.channel.send(embed)
}else if (pickaxes == 'diamond') {
     pickaxe = `<:Diamond_Pickaxe:542271517006757889>` 
  } else if (pickaxes == 'emerald') {
     pickaxe = `<:Emeral_pickaxe:542271541178793995>`
  } else {
     pickaxe = '<:Wooden_Pickaxe:542271456537477120>';
  }
 
  console.log(pickaxe)
    //let result = Math.floor(Math.random() * 25)    

    //message.react('✅')
}

exports.help = {
    name: "m"
}