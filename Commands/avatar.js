const Discord = require("Discord.js");

module.exports.run = async (bot, message, args) => {
    const resolvedUser = (args[0] !== undefined) ? message.guild.members.get(args[0].match(/[0-9]/g).join('')) : null;
    const botuser = resolvedUser ? message.guild.members.get(resolvedUser.id) : message.member;

    let avatarembed = new Discord.RichEmbed() 
    .setAuthor(botuser.displayName, botuser.user.avatarURL)
    .setColor("#0ad394")
    .setTitle("Avatar")
    .setImage(botuser.user.avatarURL);
    
    return message.channel.send({embed:avatarembed})
}
    
module.exports.help = {
    name:"avatar"
}