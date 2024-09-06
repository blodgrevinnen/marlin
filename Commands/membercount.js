const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    function checkBots(guild) {
        let botCount = 0; 
        guild.members.forEach(member => { 
          if(member.user.bot) botCount++; 
        });
        return botCount; 
      }
      function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++; 
        });
        return memberCount;
      }
    let serverembed = new Discord.RichEmbed()//add online member amount
    .setColor("#0ad394")
    .addField("Members", message.guild.memberCount, true)
    .addField('Humans', checkMembers(message.guild), true)
    .addField('Bots', checkBots(message.guild), true)
    .setTimestamp(message.createdAt);

    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "membercount"
}