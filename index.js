const fs = require("fs");
const moment = require('moment');
const Discord = require("discord.js"); //tolong ya
//const { prefix } = require('./config.json');
const bot = new Discord.Client({disableEveryone: true}) 
const config = require("./config.json"); 
const client = new Discord.Client({disableEveryone: true})
const db = require("quick.db");
const xp = require("./xp.json")
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL_TOKEN, client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.hasVoted("515930206557569036").then(voted => {
    if (voted) console.log("Tonkku has voted!!!")
});
dbl.getVotes().then(votes => {
    if (votes.find(vote => vote.id == "95579865788456960")) console.log("Tonkku has voted!!!")
});
dbl.on('ready', hook => {
  console.log(`Webhook running with path ${hook.path}`);
});
dbl.on('vote', vote => {
  client.users.get("515930206557569036").send(`User with ID ${vote.user} just voted!`);
});

dbl.isWeekend().then(weekend => {
    if (weekend) console.log("Woo! Multiplier time!")
});

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})


client.commands = new Discord.Collection();
client.queue = new Discord.Collection();




var utils = require('bot-utils')






client.on('ready', () => {
  console.log("ONLINE")
   setInterval(() => {
     const status = [
      `"]" my prefix!`,
      `On ${client.guilds.size} Server`,
      `With my Developer`,
      `With ${client.users.size} Users`,
      `Ping: ${client.ping}`
    ];
     let random = Math.floor(Math.random() * status.length)
     client.user.setPresence({ game: { name: status[random], type: "streaming", url: "https://www.twitch.tv/_kibayy"}});
  }, 5000);

})

      
  client.on("message",  message => {
     
   
  if(message.author.bot) return;
 
  if(message.channel.type === "dm") return;
     if(message.author !== bot.user)

  if(!message.content.startsWith(config.prefix)) return;


  let prefix = config.prefix;
 
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(client,message,args,prefix);
    
   /* try {
      let command;
      if(bot.commands.has(cmd)) {
         command = bot.commands.get(cmd);
      } else if (bot.aliases.has(cmd)) {
        command = bot.commands.get(bot.aliases.get(cmd));
      }*/
      fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
          jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
    client.commands.set(props.help.name1, props);
  });
}); 
      
  try {
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		console.log(e.message)
	} finally {
        
     console.log(`**${message.author.username}** used command: "${cmd}" in guild **${message.guild.name}** **[**${message.guild.id}**]**`)
    
  }
    //^^Handler
   

let xpAdd = Math.floor(Math.random() *5) + 8;

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    message.channel.send(`**${message.author} 🆙! Level: ${curlvl + 1}**`).then(msg => {msg.delete(60000)});
  }      //CEK SERVER
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
}); 

client.on("guildCreate", async guild => {
  let guildCreateChannel = client.channels.get("533950352790257665");
  let test = client.users
  let general = guild.channels.find('name', 'general');
  
  guild.channels.get(general.id).createInvite().then(invite => {
    
    let joinEmbed = new Discord.RichEmbed()
      .setTitle('Guild Joined')
      .setThumbnail(guild.iconURL)
      .setURL(invite.url)
      .setDescription('Join the new Guild')
      .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**\nUser Total: **${guild.memberCount}**`)
      
    
    guildCreateChannel.send(joinEmbed);
  });
  client.channels.get("559639700847984641").setName(`Total user: ${test}`)
});

client.on("guildDelete", async guild => {
  let guildCreateDelete = client.channels.get("533950352790257665");
  
  let leaveEmbed = new Discord.RichEmbed()
    .setTitle('Guild Left')
    .setThumbnail(guild.iconURL)
    .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  
  guildCreateDelete.send(leaveEmbed);
});

const express = require('express');
const http = require('http');
const app = express();

// 5 Minute Ping Times
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// Turn on the bot
client.login(process.env.TOKEN);// Goto .env to insert your bot token :)

  //Handler
/*try {
  //Code Get Aliases
    let command;
  	if (bot.commands.has(cmd)) {
		command = bot.commands.get(cmd);
	} else if (bot.aliases.has(cmd)) {
		command = bot.commands.get(bot.aliases.get(cmd));
	}
		//Logs ween user on Server use command
  command.run(bot, message, args);
} catch (e) {
    console.log(e.message)
} finally {
    console.log(`${message.author.tag} Usage Command: ${cmd}, In Server: ${message.guild.name}, ID Server: ${message.guild.id}`);
}
});*/