const Discord = require("discord.js");
const client = new Discord.Client();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str)
}

client.on("ready", () => {
    console.log("The bot is fully operational!");
    client.user.setGame('Use !help for help!');
});

client.on("message", message => {
    if(commandIs("hello", message)){
        message.channel.sendMessage(`Hello there, ${message.author.username}.`)
    }
    if(commandIs("aidan", message)){
        message.channel.sendMessage(`That cool pineapple kid? Nice taste, ${message.author.username}.`)
    }
    if(commandIs("help", message)){
        message.channel.sendMessage('Current commands: !hello, !aidan')
    }
});

client.login("Mjk2NDc5ODY4Nzc2ODczOTk0.C792UA.DOenH3Oeo1bODs6JwX8rz6Ip2ew");

