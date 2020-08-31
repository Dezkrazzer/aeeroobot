const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (bot, message, args, color, prefix) => {
    if (message.author.id !== '515930206557569036' && message.author.id !== '242969117479403520' && message.author.id !== '369507341973979136') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Eval')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
  
}

exports.help = {
    name: 'eval',
    category: 'OWNER BOT'
}