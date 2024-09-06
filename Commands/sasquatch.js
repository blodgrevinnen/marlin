const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://vignette.wikia.nocookie.net/the-official-big-lez-show/images/5/59/Donny_the_Dealer.PNG/revision/latest?cb=20141229153240", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSB_mp-tdmgDpFZoj48Gk0zQ63vB9DrDy2wXDhUVts7oMhZH1aVg"];

    let result = Math.floor((Math.random() * replies.length));

    let sasquatchembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#0ad394")
    .setImage(replies[result]);

    message.channel.send(sasquatchembed);


}

module.exports.help = {
    name:"sasquatch"
}