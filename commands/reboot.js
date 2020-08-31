const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = async (bot, message, args,level) => {

    const token = process.env.TOKEN; // Dh Ku Bantu Mas :V
     if (message.author.id !== "515930206557569036" || message.author.id !== "515930206557569036") return // lp gk b
      message.channel.send("<a:loading1:529104794691043338> Rebooting...").then(async message => {
  setTimeout(() => {
   message.edit('<a:AwumpParty:533556206481047562> Success');
  }, 3000); 
});
      resetBot(message.channel);
            function resetBot(channel) {
                message.react('✅')
                    .then(message => bot.destroy())
                    .then(() => bot.login(process.env.TOKEN));
              
            }
     
}
module.exports.help = {
    name: "reboot",
    category: "Developper",
    description: "Reboot command to reboot the bot.",
    usage: "reboot"
}