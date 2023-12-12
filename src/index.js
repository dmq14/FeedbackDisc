require("dotenv").config();
const {Client, GatewayIntentBits, Collection} = require('discord.js');
const command = require("./handlers/command");

const client = new Client({
    intents : [GatewayIntentBits.Guilds]
});

client.command = new Collection();
client.countdown = new Collection();

["event","command"].forEach((file) => require(`./handlers/${file}`)(client));

client.login(process.env.TOKEN);