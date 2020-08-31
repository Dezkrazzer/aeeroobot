const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("==========>**Commands List**<==========")
  
  .setColor(" ")
  .setDescription("This is all my command. You can use this bot on your server. My global prefix is `]`")
  .setFooter("Aeeroo#6984", "https://cdn.discordapp.com/avatars/429066847258804255/175c98200c8c6b1ff522982d3b95a9c8.png?size=2048")
  .setThumbnail("https://cdn.discordapp.com/avatars/429066847258804255/175c98200c8c6b1ff522982d3b95a9c8.png?size=2048")
  
  .setTimestamp()
  .addField(":earth_africa: General", '`help` | `ping` | `stats` | `botinfo` | `vote` | `invite` | `web`')
  .addField(":nut_and_bolt: Utility", '`userinfo` | `serverinfo` | `avatar` | `google` | `weather` | `instagram` | `mail` | `roleinfo` | `cowsay` | `time` | `today` | `el` | `serverrole` | `avaserver` | `membercount` | `serverw` | `remindme`')
  .addField(":tools: Moderation", '`purge` | `ban`| `lockdown` | `kick`')
  .addField(":tada: Fun", '`Cat` | `8ball` | `Gif` | `Dog` | `smoke` | `pizza` | `say` | `ascii` | `gay` | `hug` | `wwe` | `meme` | `quiz`')
  .addField("<a:AblobDJ:533555443654590464> Music", '`play` | `pause` | `skip` | `stop` | `loop`')
  .addField(":dollar: Economy", '`daily` | `balance` | `work` | `mine` | `profile` | `setstatus` | `delstatus`')
  .addField(":gear: Setting(Waiting Fixxed)", '`setprefix`')
  .addField(":closed_lock_with_key: Dev", '`reboot` | `eval` | `exec` | `reload` | `cserver`')

  const embed2 = new Discord.RichEmbed()
  .setTitle("Link for Aeeroo")
  .setColor(" ")
  .addField(":point_down: Vote", "[Click here](https://discordbots.org/bot/549575603959889921/vote)")
  .addField(":point_down: Invite me", "[Click here](https://discordapp.com/oauth2/authorize?client_id=549575603959889921&permissions=0&scope=bot)")
  .addField(":point_down: DBL page", "[Click here](https://discordbots.org/bot/549575603959889921)")
  .setFooter(`Replying to ${message.author.username}`)
  
  
  message.channel.send(embed)
  message.channel.send(embed2)
}

exports.conf = {
    aliases: ['h'],
    cooldown: "2"
}
  module.exports.help = {
    name: "help"
  }