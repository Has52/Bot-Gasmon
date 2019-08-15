const Discord = require("discord.js");
const config = require("../botconfig.json");

module.exports.run = async(bot, message, args, msg) => {

    let sicon = message.guild.name;
let embeda = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setThumbnail(message.author.avatarURL)
    .addField(`${message.member.displayName}`, `Odmowa dostępu`)
    .setFooter(sicon)
    .setTimestamp()
    if (!message.member.roles.find(r => r.name === config.roladev)) return message.channel.send(embeda);

          const tekst = args.join(' ');
          if (!tekst) return message.channel.send("Podaj tekst ogłoszenia"); 
          let reportEmbed = new Discord.RichEmbed() 
            .setTitle("📝Devlog") 
            .setColor(`RANDOM`) 
            .addField("Autor Devloga", `${message.author}`)
            .addField("Opis Devloga", tekst)
            .setFooter(sicon) 
            .setThumbnail(message.author.avatarURL)
            .setTimestamp() 
             
            message.delete().catch(O_o=>{});
            message.guild.channels.get(config.iddev).sendMessage(reportEmbed);
        
            return;        
    }
    
    
    module.exports.help = {
    
      name:`${config.komendadev}`
    
    }