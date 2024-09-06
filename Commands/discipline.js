const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have access to this command.");
    let serverembed = new Discord.RichEmbed()
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setColor("#0ad394")
    .addField("__**Discipline**__", "The four levels of discipline are included below.")
    .addField("__1)__", "First warning.")
    .addField("__2)__", "Second warning.")
    .addField("__3)__", "Kick.")
    .addField("__4)__", "Ban.")
    .addField("__**Muting**__", "If a staff member feels like it is necessary to mute you, they will do so and will decide how long it will last.");

    message.delete().catch(O_o=>{});
    return message.channel.send(serverembed);

}

module.exports.help = {
    name: "discipline"
}