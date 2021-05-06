const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'moderation', []);
  }

 async run(client, message, args) {
  const helpEmbed = new Discord.MessageEmbed()
  .setTitle(`${message.author.tag} My commands are:`)
  .setDescription(`**p!ban: Bans a person from the server 
  p!kick: Kicks a person from the server
  p!purge: Deletes messages 
  p!help: Opens the help page
  p!unban: Unbans a person from the server 
  p!say: The bot repeats what you say 
  p!nickname: Sets @memberpinged nickname
  Note: Most of these commands require some type of permission**`)
  .setFooter(message.author.tag ,message.author.displayAvatarURL())
  .setColor("#c73c3c")
  .setTimestamp();
  try {
    await message.channel.send(helpEmbed);
  } catch (err) {
   console.log(err);
  Message.channel.send('I am not able to say that message.')
  }
 }
}