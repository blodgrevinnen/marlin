const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.reply("You cannot use this command.");
    let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user.");
    let role = args.slice(1).join(" ");
    if(!role) return message.reply("Specify a role.");
    let gRole = message.guild.roles.find(r => r.name.toLowerCase() === `${role}`);
    if(!gRole) return message.reply("Couldn't find that role.");

    if(rMember.roles.has(gRole)) return message.reply("They already have that role.");
        await rMember.addRole(gRole);
    console.log(role);

        message.channel.send(`<@${rMember.id}> has been given the role "${gRole.name}."`)
        message.delete().catch(O_o=>{});
}

module.exports.help = {
    name: "addrole"
}