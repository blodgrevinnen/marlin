
const os = require('os')
exports.run = async (client, message, args, level) => { 
if(message.author.id !== "") return;
  const code = args.join(" ");
  try {
    let evaled = eval(code);
    const clean = await (client, evaled);
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await (client, err)}\n\`\`\``);
  }
};


exports.help = {
    name: "eval"
}