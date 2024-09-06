const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let nUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!nUser) return message.channel.send("Please specify a user.");
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("You do not have permission to use this command");
    let nReason = args.slice(1).join(" ") || "None";

    let nickEmbed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setTimestamp(message.createdAt)
    .setTitle("Nickname Change")
    .addField("User's Name", `${nUser} with ID ${nUser.id}`)
    .addField("Changed by", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Changed in", message.channel)
    .addField("New nickname", `${nReason}`)
    .addField("Time", message.createdAt);

    let incidentchannel = message.guild.channels.find(c => c.name === "modlogs")
    if(!incidentchannel) return message.channel.send("Can't find modlogs channel, have you created one yet?");

    message.guild.member(nUser).setNickname(args.slice(1).join(" "));
    message.delete().catch(O_o=>{});
    incidentchannel.send(nickEmbed);

    return;

}

module.exports.help = {
    name:"nick"
}