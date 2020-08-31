module.exports.run = async (client, message, args) => {
            var start = message.createdTimestamp;
            message.channel.send("Pong!").then(m => {
                var latency = Date.now() - start
                
                m.edit(`<a:wifi:542882835212533762> Pong! | ${latency}ms`)
            });
  }
  
module.exports.help = {
  name: "ping",
  description: 'Show All Command Nao Tomori BOT',
  usage: 'help',
  category: "GENERAL"
}