const Discord = require("discord.js");
const talkedRecently = new Set();
exports.run = async (client, message) => {
  const msg = await message.channel.send("Ping...⌚");
  
  msg.edit(`⌛ Ping results: \`${msg.createdTimestamp - message.createdTimestamp}ms\``)
}

exports.help = {
  name: "ping",
};