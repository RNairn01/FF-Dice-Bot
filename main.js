//npm run devStart
const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

var dice = require('./dice.js');

const COMMAND = '!';
const rollPrefix = 'groll';
const shortRollPrefix = 'gr';
const helpPrefix = 'ghelp';
const gmRollPrefix = 'gm';

client.on('ready', () => {
    console.log('Logged in!');
});

client.on('message', msg => {

   if (msg.content === `${COMMAND}${helpPrefix}` && !msg.author.bot) {
    msg.reply('\n**COMMANDS:** \n\n' + '**!ghelp** - display this help info.\n\n' + '**!groll** or **!gr** - roll the specified number of a certain dice type. Can roll multiple dice from one command by seperating inputs with spaces.\n ' + 
    'e.g. "!roll 4g 3p" will roll 4 green ability dice and 3 purple difficulty dice.\n\n' +
    '**!gm** - takes same inputs as !groll command but DMs the result to the user for secret rolls.\n\n' + 
    '**Dice Types:** \ny - yellow proficiency die \ng - green ability die \nr - red challenge die \np - purple difficulty die \nb - boost die \ns - setback die \nf - force die (SW Only)'); 
   }
   
   if (msg.content.startsWith(COMMAND + rollPrefix) || msg.content.startsWith(COMMAND + shortRollPrefix) && !msg.author.bot) {
    let args;
    if (msg.content.startsWith(COMMAND + rollPrefix)) {
      args = msg.content.slice(rollPrefix.length + COMMAND.length).trim().split(/ +/);
    } else if (msg.content.startsWith(COMMAND + shortRollPrefix)) {
      args = msg.content.slice(shortRollPrefix.length + COMMAND.length).trim().split(/ +/);  
    };

   let yInput = 0;
   let gInput = 0;
   let rInput = 0;
   let pInput = 0;
   let bInput = 0;
   let sInput = 0;
   let fInput = 0;
   
   args.forEach(e => {
       if (e[1] == 'y') yInput = e[0];
       if (e[1] == 'g') gInput = e[0];
       if (e[1] == 'r') rInput = e[0];
       if (e[1] == 'p') pInput = e[0];
       if (e[1] == 'b') bInput = e[0];
       if (e[1] == 's') sInput = e[0];
       if (e[1] == 'f') fInput = e[0];
   });

   let rollInputs = [yInput, gInput, rInput, pInput, bInput, sInput];
   
   if (rollInputs.some(e => e > 0)) {
    msg.reply(dice.determineSuccess(yInput, gInput, rInput, pInput, bInput, sInput));
  };

   if(fInput > 0) msg.reply(dice.forceOutput(fInput));
 };
 
  if (msg.content.startsWith(COMMAND + gmRollPrefix) && !msg.author.bot) {
  
    let args = msg.content.slice(gmRollPrefix.length + COMMAND.length).trim().split(/ +/);

    let yInput = 0;
    let gInput = 0;
    let rInput = 0;
    let pInput = 0;
    let bInput = 0;
    let sInput = 0;
    let fInput = 0;
 
    args.forEach(e => {
     if (e[1] == 'y') yInput = e[0];
     if (e[1] == 'g') gInput = e[0];
     if (e[1] == 'r') rInput = e[0];
     if (e[1] == 'p') pInput = e[0];
     if (e[1] == 'b') bInput = e[0];
     if (e[1] == 's') sInput = e[0];
     if (e[1] == 'f') fInput = e[0];
    });

    let rollInputs = [yInput, gInput, rInput, pInput, bInput, sInput];
 
    if (rollInputs.some(e => e > 0)) {
    msg.author.send(dice.determineSuccess(yInput, gInput, rInput, pInput, bInput, sInput));
    };

    if(fInput > 0) msg.author.send(dice.forceOutput(fInput));
 };
});
client.login(process.env.BOT_TOKEN)