const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.reply("Please ask a full question!");
    let replies = ['It is certain. :8ball: ', 'It is decidedly so. :8ball: ', 'Without a doubt. :8ball: ', 'Yes - definitely. :8ball: ', 'You may rely on it. :8ball: ', 'As I see it, yes. :8ball: ', 'Most likely. :8ball: ', 'Outlook good. :8ball: ', 'Yes. :8ball: ', 'Signs point to yes. :8ball: ', 'Reply hazy, try again. :8ball: ', 'Ask again later. :8ball: ', 'Better not tell you now. :8ball: ', 'Cannot predict now. :8ball: ', 'Concentrate and ask again. :8ball: ', "Don't count on it. :8ball: ", 'My reply is no. :8ball: ', 'My sources say no. :8ball: ', 'Outlook not so good. :8ball: ', 'Very doubtful. :8ball: '];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#0ad394")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);


}

module.exports.help = {
    name:"8ball"
}