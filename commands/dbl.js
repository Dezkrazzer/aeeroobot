const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN);
const Discord = require("discord.js");
const { RichEmbed } = require('discord.js')
const Config = require ("../config.json");
let Prefix = Config.prefix
const LOL =
      {
        "false": "No Certified",
        "true": "Certified"
      }

exports.run = async (client, msg, args) => {
  if (!args[0]) {
    const embed = new Discord.RichEmbed()
    .setTitle("Discord Bots List Information")
    .setColor("RANDOM")
    .setDescription("See your many bots in Discord Bots List")
    .addField("**+>**info", "Usage: ]dbl info @mention")
    .addField("**+>**widget", "Usage: ]dbl widget @mention")
    .setFooter("Powered by Discord Bots List")
    msg.channel.send(embed)
    //msg.reply(` Use type: ${Prefix}dbl info/widget <Mention Bot> | <Bot ID> = For check info about bot on Web **__Discord Bots List__** \n\n**Note:** Only bot registered on page \`Discord Bots List\`\ can see that info`)
  } else if(args[0] == 'info') {
    try {
    let users = msg.mentions.users.first() || await client.fetchUser(args[1]); 
  
      let Bots = await dbl.getBot(users.id)
      if(Bots.server_count === undefined) Bots.server_count = '0'
      
      if (!Bots.github) Bots.github = 'No Github Repository'
      else Bots.github = `[Github Repository](${Bots.github})`
      
      if (!Bots.support) Bots.support = 'No Support Server'
      else Bots.support = `[Support Server](https://discord.gg/${Bots.support})`
     
      if (!Bots.website) Bots.website = 'No Website'
      else Bots.website = `[Website](${Bots.website})`
      
      if (!Bots.invite) Bots.invite = 'No Invite'
      else Bots.invite = `[Invite](${Bots.invite})`
    
      // Creates Embed first,
      let embed = new Discord.RichEmbed()
      .setThumbnail(`https://cdn.discordapp.com/avatars/${Bots.id}/${Bots.avatar}`)
      .setColor("RANDOM")
      .setTitle(`Sort Description Of This Bot`)
      .setAuthor(` | Information DBL Of Bot: ${Bots.username}#${Bots.discriminator}`, 'https://images-ext-1.discordapp.net/external/zA14dx9oBQbAVMXasbe7YBUt9c-K8BlofT-qlCLlSrM/https/images-ext-2.discordapp.net/external/NUQ1frynEtUDB_-ByRw_NBdTl0sVeNacGQogqRLZ77Y/https/cdn.discordapp.com/emojis/393548363879940108.gif')
      .setDescription(`\`\`\`${Bots.shortdesc}\`\`\` \n  **__📊 •| Bot Statistic |• 📊 __**\n**Monthly Votes:** ${Bots.monthlyPoints} \n**Total Votes:** ${Bots.points} \n**Lib:** ${Bots.lib} \n**Prefix:** ${Bots.prefix} \n**Tags:** ${Bots.tags.join(', ')} \n**Certified:** ${LOL[Bots.certifiedBot]} \n**Posted Guild Count:** ${Bots.server_count} \n**Posted Shard Count:** ${Bots.shards.length} \n\n📎 •| **__Link Of This Bot__** |• 📎\n[Discord Bots List Page](https://discordbots.org/bot/${Bots.id}) | ${Bots.invite} | ${Bots.support} | ${Bots.github} | ${Bots.website}`)
      .setFooter(`Powered by Discord Bots List`)
      msg.channel.send(embed);
    } catch (err) {    
      console.log(err)
      return msg.channel.send(`ℹ️ | ${msg.author}, Sorry, the bot you input is not listed on the Discord Bots List's website or maybe this is not bot`) 
    //return msg.channel.send(err)
    }
    
    } else if (args[0] == 'widget') {
        let users = msg.mentions.users.first() || client.users.get(args[0]);
    if (users) users = `https://discordbots.org/api/widget/${users.id}.png`;
      
      let oEmbed = new RichEmbed() //usaha lah bodo ga copad
      .setColor("BLUE") // lol lol lol lolol lolo
      .setTitle(`Bot's ${users.tag} widget`)
      .attachFile({attachment: users, name: `bot_widget.png`})
      .setImage("attachment://bot_widget.png")
      msg.channel.send(oEmbed)
      return;
     
    }
}
exports.help = {
  name: "dbl",
  aliases: [],
  category: "Utility"
}