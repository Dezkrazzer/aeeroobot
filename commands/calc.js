const Discord = require('discord.js'),
      math = require('math-expression-evaluator');

exports.run = (bot, message, args, tools) => {
    
    
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff);
    
    
    if (!args[0]) {
        
        
        embed.setFooter('Please input an expression! Usage: ```]calc <expression>```');
        
       
        return message.channel.send(embed);
        
    }
    
    
    let result;
    try {
        
        result = math.eval(args.join(' '));
        
    } catch (e) { 
        
        result = 'Error: "Invalid Input"';
        
    }
        
    
    
    embed.addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
         .addField('Output', `\`\`\`js\n${result}\`\`\``);
         
    
    message.channel.send(embed);
    
}

module.exports.help = {
  name:"calc"
}