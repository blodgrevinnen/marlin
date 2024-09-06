const Discord = require('discord.js');
const talkedRecently = new Set();
const status = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline/Invisible'
};
exports.run = async (client, message, args) => {
  const resolvedUser = (args[0] !== undefined) ? message.guild.members.get(args[0].match(/[0-9]/g).join('')) : null;
  if (talkedRecently.has(message.author.id) && !message.member.roles.has('490364533550874644')) {

    const botmessage = await message.channel.send('You are being rate limited!' + message.author);
    botmessage.delete(10000);
  } else {
    if (resolvedUser)
      try {
        level = client.permlevel(resolvedUser.lastMessage);
      } catch (e) {
        level = 0;
      }
    const msg = await message.channel.send('Loading...');
    try {
      const botuser = resolvedUser ? message.guild.members.get(resolvedUser.id) : message.member;
      const tabb = resolvedUser ? message.guild.members.get(resolvedUser.id).roles.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1) : message.member.roles.sort((a, b) => b.position - a.position).map(i => i.id).slice(0, -1);
      let bot = '';
      let tAn = '';
      for (let i = 0; i < tabb.length; i++) {
        tAn += '<@&' + tabb[i] + '>';
        if (tabb.length != (i + 1)) tAn += ', ';
      }
      if (botuser.user.bot === true) {
        bot = 'Yes';
      } else {
        bot = 'No';
      }
      function checkUserPermission(guild, botuser) {
        const arrayOfPerms = [];
        if (botuser.hasPermission('ADMINISTRATOR')) {
          arrayOfPerms.push('Administrator');

        }
        if (botuser.hasPermission('MANAGE_GUILD')) {
          arrayOfPerms.push('Manage Server');
        }
        if (botuser.hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) {
          arrayOfPerms.push('Manage Roles');
        }
        if (botuser.hasPermission('MANAGE_CHANNELS')) {
          arrayOfPerms.push('Manage Channels');
        }
        if (botuser.hasPermission('KICK_MEMBERS')) {
          arrayOfPerms.push('Kick Members');
        }
        if (botuser.hasPermission('BAN_MEMBERS')) {
          arrayOfPerms.push('Ban Members');
        }
        if (botuser.hasPermission('MANAGE_NICKNAMES')) {
          arrayOfPerms.push('Manage Nicknames');
        }
        if (botuser.hasPermission('MANAGE_EMOJIS')) {
          arrayOfPerms.push('Manage Emojis');
        }
        if (botuser.hasPermission('MANAGE_WEBHOOKS')) {
          arrayOfPerms.push('Manage Webhooks');
        }
        if (botuser.hasPermission('MANAGE_MESSAGES')) {
          arrayOfPerms.push('Manage Messages');
        }
        if (botuser.hasPermission('MENTION_EVERYONE')) {
          arrayOfPerms.push('Mention Everyone');
        }


        return arrayOfPerms;
      }
      const embed = new Discord.RichEmbed();
      embed.setAuthor(botuser.displayName, botuser.user.avatarURL);
      embed.setThumbnail(botuser.user.avatarURL);
      embed.setColor("#0ad394");
      embed.addField('Registered', `${botuser.user.createdAt.toLocaleString('en-US')}`, true);
      embed.addField('Joined Server At', `${botuser.joinedAt.toLocaleString('en-US')}`, true);
      embed.addField("Voice channel", `${botuser.voiceChannel ? `${botuser.voiceChannel}` : "none"}`, true)
      embed.addField('Status', `${status[botuser.user.presence.status]}`, true);
      embed.addField('Playing', `${botuser.user.presence.game ? `${botuser.user.presence.game.name}` : 'Nothing'}`, true);
      embed.addField("Manageable", `${botuser.manageable}`, true)
      embed.addField(`Roles - ${botuser.roles.size - 1}`, `${tAn}`, true);
      if (checkUserPermission(message.guild, botuser).length > 0) {
        embed.addField('Key Permissions', `${checkUserPermission(message.guild, botuser).join(', ')}`, true);
      }
      embed.setTimestamp();
      embed.setFooter(`${client.user.username} | ID ${botuser.id}`);
      if (bot == 'Yes') {
        embed.addField('Bot', `${bot}`, true);
      }
      msg.edit(embed);
    } catch (err) {
      msg.edit('EXCPT*- ' +
      err);
    }
    talkedRecently.add(message.author.id);
    setTimeout(() => {
    // Removes the user from the set after a minute
      talkedRecently.delete(message.author.id);
    }, 2000);
  }
};

exports.help = {
  name: 'whois',
};