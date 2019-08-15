const Discord = require('discord.js');
const config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.name;
    let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
    .setFooter(sicon)
    .setTimestamp()
    if (!message.member.roles.find(r => r.name === config.rolasay)) return message.channel.send(embeda);
        let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);


}

module.exports.help = {
    name: `${config.komendasay}`
}