const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    const invite = 'https://discord.gg/aRkVzXy'

    const embed = new Discord.RichEmbed()
    .setAuthor("Marlin™", "https://cdn.discordapp.com/attachments/497556038069911557/497556592707895306/serverlogo.png")
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .setDescription("[Server Invite](https://discord.gg/aRkVzXy)")
    message.channel.send(embed)
}


  module.exports.help = {
    name: "serverinvite",
  };