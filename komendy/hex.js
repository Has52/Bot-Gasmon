const Discord = module.require('discord.js');
const config = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let sicon = message.guild.name;
let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
     .setThumbnail(message.author.avatarURL)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
     .setFooter(sicon)
    .setTimestamp()

     if (!message.member.roles.find(r => r.name === config.rolehex)) return message.channel.send(embeda);

function dec2hex(str){ // .toString(16) only works up to 2^53
    var dec = str.toString().split(''), sum = [], hex = [], i, s
    while(dec.length){
        s = 1 * dec.shift()
        for(i = 0; s || i < sum.length; i++){
            s += (sum[i] || 0) * 10
            sum[i] = s % 16
            s = (s - sum[i]) / 16
        }
    }
    while(sum.length){
        hex.push(sum.pop().toString(16))
    }
    return hex.join('')
}

        if(isNaN(args[0])){
            return message.channel.send("Zły hex")
        }else{
            message.channel.send("steam:" + dec2hex(args[0]));
        }
      
}

module.exports.help = {
    name: `${config.komendahex}`
}