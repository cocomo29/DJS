const Discord =  require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});
const config = require('./config.json');
const command =  require('./command')


client.on('ready', () =>{
    console.log('The client is ready!')

    command(client, 'ping', message=> {
        message.channel.send('Pong!')
    })
})

client.login(config.token)