const { exec } = require("child_process");
const access = ["515930206557569036"]//This is to access the command / only development that can use it

module.exports.run = async (bot, msg, args) => {
var message = msg

access.forEach(async function(owner) {
if(message.author.id !== owner) return;
exec(args.join(" "), async (err, stdout, stderr) => { 
        
if(!stderr.length){
return message.channel.send(stdout, { code: 'bash'});
}
return message.channel.send(stderr, { code: 'bash'});
});
})
return
}

module.exports.conf = {
  "name": "exec",
  "aliases": ["ex", "$"]
}
module.exports.help = {
  "name": "exec",
  "description": "For exec code Javascript and package.json",
  "usage": "exec <bash>"
}