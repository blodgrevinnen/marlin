const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let reason = args.join(" ") || "None, warn the user for using the command incorrectly.";

    let partnerEmbed = new Discord.RichEmbed()
    .setDescription("Partner Request")
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .addField("Requested by", `${message.author} with ID: ${message.author.id}`)
    .addField("Time", message.createdAt)
    .addField("Info", reason);

    let partnerChannel = message.guild.channels.find(x => x.name === "partner-requests")
    if(!partnerChannel) return message.channel.send("Couldn't find ''#partner-requests'' channel. Please create a channel with the name `partner-requests` and allow the bot to send messages in it.");

    message.delete().catch(O_o=>{});
    partnerChannel.send({embed:partnerEmbed});
    return;
}

module.exports.help = {
    name: "partner"
}