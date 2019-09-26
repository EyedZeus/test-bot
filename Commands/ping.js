const Discord = require("discord.js")

module.exports.run = async (client,msg,args,split) => {

     if(msg.content == prefix + "ping"){
        msg.reply("Pong! :ping_pong: ")
    }
}

module.exports.help = {
    name:"ping"
  }