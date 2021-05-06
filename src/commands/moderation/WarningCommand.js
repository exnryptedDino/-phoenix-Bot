const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require ('discord.js');
module.exports = class WarningCommand extends BaseCommand {
  constructor() {
    super('warning', 'moderation', []);
  }

  run(client, message, args) {
 
  }
}