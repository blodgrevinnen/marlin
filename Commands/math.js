const Discord = require("discord.js");
const math = require('mathjs')

module.exports.run = async (bot, message, args, tools) => {

    if (!args[0]) return message.channel.send('Please input a calculation.');

    let resp;
    try {
        resp = math.eval(args.join(' '));
    }catch(e) {
        return message.channel.send('Please input a valid calculation.')
    }

    const embed = new Discord.RichEmbed()
    .setColor('#0ad394')
    .setTitle('Calculator')
    .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``)

    return message.channel.send(embed);

}

module.exports.help = {
    name:"math"
}
