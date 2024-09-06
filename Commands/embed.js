const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have access to this command!");

  const embed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setDescription(args.join(' '))
    .setFooter(bot.user.username, bot.user.avatarURL)
    .setTimestamp();
    
    message.delete().catch(O_o=>{});
    message.channel.send(embed);
};

module.exports.help = {
  name: "embed"
};