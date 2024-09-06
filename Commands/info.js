const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setThumbnail(bot.user.avatarURL)
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .addField("Created On", `${bot.user.createdAt.toLocaleString('en-US')}`, true)
    .addField("Servers", `${bot.guilds.size.toLocaleString()}`, true)
    .addField("Users", `${bot.users.size.toLocaleString()}`, true)
    .addField("Library", "discord.js", true)
    .addField("Node Version", "8.11.4", true)
    .addField("Creator", "Tanner#7777", true)
    .addField("Discord.js Version", "11.4.2", true)
    .addField("Website", "[marlinbot.com](https://www.marlinbot.com/)", true)
    .addField("Server", "[Invite Link](https://discord.gg/aRkVzXy)", true)
    .addField("Invite", "[Invite Marlin Here.](https://discordapp.com/api/oauth2/authorize?client_id=497156675430776832&permissions=2146958839&scope=bot)", true)
    .setFooter(`${bot.user.username} | Bot's ID ${bot.user.id} |  Tanner#7777`);

    return message.channel.send(botembed);
};

module.exports.help = {
    name: "info"
}

