const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { Client, Attachment } = require('discord.js');
const { prefix, token } = require('./botconfig') ;
client.commands = new Discord.Collection();

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
    });
  });

client.on("message", (msg) => { 
if (msg.author.bot) return;

    if (msg.content == prefix + "hi") {
        const attachment = new Attachment('./Images/welcome.gif');
        msg.channel.send("hello <@" + msg.author.id + ">")
        msg.channel.send(attachment)
    }
    
    let split = msg.content.split(/ +/);
   let args = split.splice(1);
 
   if (args.length > 0){
    if (split[0] == prefix + "repeat") {
        msg.channel.send(args[0])
    }
 }
else if (args.length == 0 && split[0] == prefix + "repeat") {
   msg.channel.send("What should the bot repeat?")
}
if (msg.content == prefix + "avatar") {
    msg.channel.send("Your Avatar <@" + msg.author.id + ">" + msg.author.avatarURL);}

if (split[0] == prefix + "greet" && args.length == 0){
    msg.reply("please add the id of the user you are greeting. Like " + prefix + "greet <id of user>")
}
else if(args.length > 0){
    if (split[0] == prefix + "greet")
    msg.channel.send("Greetings," + args[0] + "!! :tada: :tada:" + " You were greeted by <@" + msg.author.id + ">")
}

let messageArray = msg.content.split(" ");
let cmd = messageArray[0];

let commandfile = client.commands.get(cmd.slice[0]);
if(commandfile) commandfile.run(client,msg,args,split);

})

client.on("ready", async () => {

    console.log(client.user.username + " is online on " + client.guilds.size + " servers!");
    client.user.setActivity("/help Made by Eyed Zeus#7260", {type: "PLAYING"});
  
  client.on("guildMemberAdd", member => {"Hello! Welcome to" + client.guilds.name 
  })});

client.login(token)