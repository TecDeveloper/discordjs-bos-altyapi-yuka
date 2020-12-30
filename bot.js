const Discord = require('discord.js');
const client = new Discord.Client();
const seçenekler = require('./seçenekler.json');

var prefix = seçenekler.prefix;
var owner = seçenekler.owner;

const log = message => {
  console.log(`Bot bağlandı`);
};


client.on('message', message => {
if (message.content === 'Sa') {
	message.channel.send('Aleyküm selam, hoşgeldin');
}

client.login(seçenekler.token);
