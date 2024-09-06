const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let roles = message.guild.roles.map(r => r.name + " = " + `${r.members.size}` + " member(s)").sort().join('\n');


    let serverembed = new Discord.RichEmbed()
    .setTitle(`Total ${message.guild.roles.size}`)
    .setColor("#0ad394")
    .addField("Roles", `${roles}`);

    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "roles"
}