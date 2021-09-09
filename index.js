const Discord =  require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});
const config = require('./config.json');


client.on('ready', () =>{
    console.log('The client is ready!')
})

client.login(config.token)