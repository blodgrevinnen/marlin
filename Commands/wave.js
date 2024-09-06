const Discord = require("discord.js")

module.exports.run = async (bot, message) => {
    let embed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setImage("https://i.imgur.com/48kvUR0.gif")
    
    message.channel.send(embed);
    message.reply("Hello!");
}

module.exports.help = {
    name:"wave"
}