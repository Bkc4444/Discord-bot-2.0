const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios")
const { token } = require("./config.json"); // must change token in json with new id for access
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

async function getQuote(){
    await axios.get('https://motivational-quote-api.herokuapp.com/quotes/random')
    .then(Data => {
        let Quote = Data.data.quote //this will be the quote
        + " - " // to separate
        + Data.data.person; // the author
        console.log(Data);
        console.log(Quote);
        console.log(Author);
        return Quote
    })
}

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} 
    else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} 
    else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
    else if (commandName === 'hi') {
        await interaction.reply(`Hello ${interaction.user}`);
    }
    // else if (commandName === 'inspire') {
    //     await interaction.reply(`Hey ${interaction.user.tag} I hope you know people care about you! Stay strong!`);
    // }
    else if (commandName === 'inspire') {
        await getQuote().then(`Hey, ${interaction.user}, ${quote => interaction.reply(quote)}`);
    }
    else if (commandName.toLowerCase() === 'dragon') {
        await interaction.reply(`Breaths fire on ${interaction.user}`);
    }

});

client.login(token);
