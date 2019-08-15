const Discord = require("discord.js");
const config = require("../botconfig.json");
module.exports.run = async(bot, message, args, msg) => {

    let sicon = message.guild.name;
          const tekst = args.join(' '); //argument oddzielony spacją
          if (!tekst) return message.channel.send("Podaj tekst propozycji"); // tutaj jak nic nie wpisze sie to bot pisze:
          let reportEmbed = new Discord.RichEmbed() // tutaj tabelka sie tworzy
            .setTitle("Propozycja") // tytuł
            .setColor(`RANDOM`) // kolor
            .addField("Autor propozycji", `${message.author}`)
            .addField("Opis propozycji", tekst)
            .setFooter(sicon) // tutaj footer (podspodem)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp() // tutaj data xd
             
            message.delete().catch(O_o=>{});
            message.guild.channels.get(`${config.kanalprop}`).sendMessage(reportEmbed).then(msg => {
   msg.react('❌')
    msg.react('✅')
  })

        
            return;        
    }
    
    
    module.exports.help = {
    
      name:`${config.komendaprop}`
    
    }