// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv').config()

const token = process.env.DISCORD_TOKEN

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

console.log(token);
// Login to Discord with your client's token
client.login(token);
