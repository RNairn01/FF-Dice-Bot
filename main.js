//npm run devStart

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

var dice = require('./dice.js');
const COMMAND = '!';
const prefix = '!roll';

let numRegex = /\d/;

client.on('ready', () => {
    console.log('Logged in!');
});

client.on('message', msg => {
   
   if (!msg.content.startsWith(prefix) || msg.author.bot) return;
   const args = msg.content.slice(prefix.length).trim().split(' ');
   const command = args.shift().toLowerCase();
   msg.reply(dice.determineSuccess(command[0], command[1], command[2], command[3], command[4], command[5]))

  /*  if (msg.content === 'ping') {
        msg.reply(dice.determineSuccess(2, 3, 8, 5, 1, 0));
    }*/
});

client.login(process.env.BOT_TOKEN)