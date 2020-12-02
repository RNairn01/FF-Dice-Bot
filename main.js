//npm run devStart

require('dotenv').config();



const Discord = require('discord.js');
const client = new Discord.Client();

const COMMAND = '!';

client.on('ready', () => {
    console.log('Logged in!');
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.channel.send('Pang!')
        msg.reply('Pong!');
    }
});

client.login(process.env.BOT_TOKEN)