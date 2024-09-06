const Discord = require("discord.js")
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
 const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const embed = new Discord.RichEmbed()
    .setAuthor(`${bot.user.username}`, `${bot.user.avatarURL}`)
    .setColor("#0ad394")
    .addField(">>Uptime", `${duration}`, true)
    .addField(">>Ping", `${Math.round(bot.ping)}ms`, false)
    .setFooter(`${bot.user.username} | Tanner#7777`); 
    message.channel.send(embed)
    }
    
    module.exports.help = {
    name: "uptime"
}
