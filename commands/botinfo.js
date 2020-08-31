const Discord = require(`discord.js`);

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setAuthor("★Bot information★")
  .setDescription("```Hi! My name is Aeeroo Techno. I have featured with Music, Utility, Fun, Moderation, Economy and other command!```")
  .setColor("RANDOM")
  .setThumbnail(bicon)
  .addField(":bookmark: Bot Name", bot.user.username)
  .addField(":alarm_clock: Created At", bot.user.createdAt)
  .addField(":crown: Owner", "undefined#8895")
  .addField(":scroll: ID bot", bot.user.id)
  .addField(":mag_right: Prefix", "My prefix is **]**")
  .addField(":busts_in_silhouette: Software", "`Visual Studio Code` | `glitch.com` | `uptimerobot.com` | `discord.js` | `node.js`")
  .addField(":link: Links bot", "[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=549575603959889921&permissions=0&scope=bot) | [Bot Server](https://discord.gg/TmnQTb9)");
  
  message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}