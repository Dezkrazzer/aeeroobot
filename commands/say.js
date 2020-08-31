const Discord = require("discord.js"); //you know la

exports.run = async(client, message, args)  => {

let say = args.join(" "); //buat args nya atau kalimat yang ingin dimasukan 
if(!say) return message.reply("Provide a message! Usage: ```]say <message>```"); //buat jika executor tidak memasukan args 

message.delete().catch(O_o=>{}); //buat ngehapus commans atau perintah yang dijalanlan executor 
message.channel.send(say); //untuk mengirimkan args say
}

exports.help = {
name: "say"
}