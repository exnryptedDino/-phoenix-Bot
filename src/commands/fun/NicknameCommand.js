const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'fun', []);
  }

 async run(client, message, args) {
    // p!nickname @member nickname
    //Permission Checking:
if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("You cannot use this command.");
if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("I need manage nicknames permission to use this command.");

//Variables
const mentionedMemeber = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
const nickName = args.slice(1).join(" ");

//Input Checking:
if (!args[0]) return message.channel.send("You must state a member to nickname.");
if (!mentionedMemeber) return message.channel.send("The member stated is not in the server.");
if (!nickName) return message.channel.send("You must state a nickname to give the person mentioned.");
if (!mentionedMemeber.kickable) return message.channel.send(`I cannot change ${mentionedMemeber}'s Nickname due to them being a higher rank then me.`);

// Executing
await mentionedMemeber.setNickname(nickName).catch(err => console.log(err) && message.channel.send(`I cannot change ${mentionedMemeber}'s nickname due to a error make sure the nickname is not longer then 32 characters.`));








  }
}