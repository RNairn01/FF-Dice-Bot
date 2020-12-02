//npm run devStart

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

var dice = require('./dice.js');
const COMMAND = '!';
const rollPrefix = 'roll';

let numRegex = /\d/;

client.on('ready', () => {
    console.log('Logged in!');
});

client.on('message', msg => {
   
   if (msg.content.startsWith(COMMAND + rollPrefix) && !msg.author.bot) {
   const args = msg.content.slice(rollPrefix.length + COMMAND.length).trim().split(/ +/);

   let yInput = 0;
   let gInput = 0;
   let rInput = 0;
   let pInput = 0;
   let bInput = 0;
   let sInput = 0;

   args.forEach(e => {
       if (e[1] == 'y') yInput = e[0];
       if (e[1] == 'g') gInput = e[0];
       if (e[1] == 'r') rInput = e[0];
       if (e[1] == 'p') pInput = e[0];
       if (e[1] == 'b') bInput = e[0];
       if (e[1] == 's') sInput = e[0];
   });

   msg.reply(dice.determineSuccess(yInput, gInput, rInput, pInput, bInput, sInput));
 };
});

client.login(process.env.BOT_TOKEN)