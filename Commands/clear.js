const Discord = require("discord.js");

module.exports.run = (bot, message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have access to this command!");
    if(!args[0]) return message.channel.send("You did not specify an amount of messages!");
    message.channel.bulkDelete(Number(args[0]) + 1)
}

module.exports.help = {
    name:"clear"
}