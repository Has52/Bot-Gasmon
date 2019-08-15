const Discord = require("discord.js");
const config = require("../botconfig.json");

module.exports.run = async (bot, message) => {

    let sicon = message.guild.name;
let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
     .setThumbnail(message.author.avatarURL)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
     .setFooter(sicon)
    .setTimestamp()

     if (!message.member.roles.find(r => r.name === `${config.rolars}`)) return message.channel.send(embeda);

    message.channel.send('Trwa restartowanie bota :wave:').then(() => {
    process.exit(134);
    });
        };

module.exports.help = {
    name: `${config.komendars}`,
};