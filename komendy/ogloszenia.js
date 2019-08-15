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
    if (!message.member.roles.find(r => r.name === config.rolaogl)) return message.channel.send(embeda);
    
          const tekst = args.join(' '); //argument oddzielony spacją
          if (!tekst) return message.channel.send("Podaj tekst ogłoszenia"); // tutaj jak nic nie wpisze sie to bot pisze:
          let ogl = new Discord.RichEmbed() // tutaj tabelka sie tworzy
            .setTitle("📋Ogłoszenie") // tytuł
            .setColor(`RANDOM`) // kolor
            .addField("Autor Ogłoszenia", `${message.author}`)
            .addField("Opis Ogłoszenia", tekst)
            .setFooter(sicon) // tutaj footer (podspodem)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp() // tutaj data xd
             
            message.delete().catch(O_o=>{});
            message.guild.channels.get(`${config.idogl}`).sendMessage(ogl);
        
            return;        
    }
    
    
    module.exports.help = {
    
      name:`${config.komendaogl}`
    
    }