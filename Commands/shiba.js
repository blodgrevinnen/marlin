const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`);

    let dogembed = new Discord.RichEmbed()
    .setColor("#0ad394")
    .setTitle(":dog: Woof! bork bork Woof! :dog:")
    .setImage(body[0]);

    message.channel.send(dogembed);

}

module.exports.help = {
    name: "shiba"
}