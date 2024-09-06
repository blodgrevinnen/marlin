const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .setTitle("Bot Invite Link.")
    .setDescription("[Invite Link](https://discordapp.com/api/oauth2/authorize?client_id=497156675430776832&permissions=2146958839&scope=bot)")
    .setFooter(`${bot.user.username} | Bot's ID ${bot.user.id} |  Tanner#7777`);

    return message.channel.send(botembed);
};

module.exports.help = {
    name: "botinvite"
}