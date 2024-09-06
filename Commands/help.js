const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
    let member = message.author
    let serverembed1 = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .addField("**__>>Main__**", "Commands that are available to all members.")
    .addField("`>ping`", "Retrieves the ping.")
    .addField("`>sysinfo`", "Retrieves the system info for the machine the bot is being run on.")
    .addField("`>serverinfo`", "Retrieves the info for the server.")
    .addField("`>serverinvite`", "Sends an invite to the official Marlin server.")
    .addField("`>report <user> <reason>`", "Reports a user in a server. Anyone can use this command.")
    .addField("`>whois`", "Gets info about yourself or a user mentioned.")
    .addField("`>botinvite`", "Sends a link to the invite link to the bot so you can have it in your server!")
    .addField("`>info`", "Shows all the information related to the bot.")
    .addField("`>uptime`", "Shows how long the bot has been running.")
    .addField("`>partner <information about the server>`", "If you would like to partner, use this command with information about your server after it. An example would be `>partner Hello, I'd like to partner. Here are some things about my server.`")
    let serverembed2 = new Discord.RichEmbed()
    .setColor("#0ad394")
    .addField("**__>>Moderation__**", "Commands that are available to moderators.")
    .addField("`>addrole <user> <rolename>`", "Adds a role to a specified user.")
    .addField("`>delrole <user> <rolename>`", "Removes a role to a specified user.")
    .addField("`>ban <user> <reason>`", "Bans the specified user. Mention the user or use their ID.")
    .addField("`>kick <user> <reason>`", "Kicks the specified user. Mention the user or use their ID.")
    .addField("`>mute <user>`", "Mutes a specified member.")
    .addField("`>unmute <user>`", "Unmutes a specified member.")
    .addField("`>nick <user> <nickname>`", "Changes the nickname of the specified user.")
    .addField("`>clear <amount>`", "Clears the specified amount of messages.")
    .addField("`>say <message>`", "Sends a message in the channel that the command was used in.")
    .addField("`>embed <message>`", "Same as the say command, but it creates a pretty good looking embed!")
    .addField("`>rules`", "Sends a custom rule command geared toward the official Marlin discord server.")
    .addField("`>discipline`", "Sends a custom discipline command geared toward the official Marlin discord server.")
    .addField("`>avatar <user>`", "Sends the user's avatar, leave user field blank if you want your avatar.")
    .addField("`>roles`", "Sends all the roles that are in the server.")
    .addField("`>membercount`", "Sends the total members in the server divided into categories and the overall count.")
    let serverembed3 = new Discord.RichEmbed()
    .setColor("#0ad394")
    .addField("**__>>Fun__**", "Commands that are available to everyone and are designated to entertainment.")
    .addField("`>kek`", "Sends a common meme used in discord emotes.")
    .addField("`>dog`", "Sends a random picture of a cute dog!")
    .addField("`>cat`", "Sends a random picture of a cute cat!")
    .addField("`>shiba`", "Sends a random picture of a a Shiba Inu!")
    .addField("`>8ball <question>`", "Ask the magic 8ball a question and it will answer... MAGICALLY!")
    .addField("`>namestory`", "Sends the legendary story of how the bot was named!")
    .addField("`>wtf`", "Sends an original command from the original bot named Tabber!")
    .addField("`>frenchwtf`", "Sends an original command from the original bot named Tabber, in French!")
    .addField("`>wave`", "Wave at the bot and it'll wave back! Comes from the original bot named Tabber.")
    .addField("`>math <input>`", "Input a math equation and the bot will evaluate it!")
    .setTimestamp(message.createdAt);

    message.delete().catch(O_o=>{});
    return member.send(serverembed1).then(member.send(serverembed2)).then(member.send(serverembed3));

}

module.exports.help = {
    name: "help"
}