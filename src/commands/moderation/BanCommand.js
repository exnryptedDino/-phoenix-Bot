const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

 async run(client, message, args) {
//Permission Checking:
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to ban people.");
if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I do not have permission to ban people.");


//Variables
let reason = args.slice(1).join(" ");
const mentionedMember = message.mentions.members.first();

//input checking:
if (!reason) reason = ('No reason given.');
if (!args[0]) return message.channel.send('You must state someone to ban.');
if (!mentionedMember) return message.channel.send('The member you mentioned is not in the server.');
if (!mentionedMember.bannable) return message.channel.send('I cannot ban that member.')

//Executing
const banEmbed = new Discord.MessageEmbed()
.setTitle(`You have been banned from ${message.guild.name}`)
.setDescription(`Reason for being banned: ${reason}`)
.setTimestamp();


await mentionedMember.send(banEmbed).catch(err => console.log(err));
await mentionedMember.ban({
  days: 7,
  reason: reason
}).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned " + mentionedMember.user.tag));
  }
}