# Discord-bot-2.0
In this repo you will find a working discord bot. I will be teaching you how to implement this into your own server as well.

Once this is all downloaded you will need to install a few things.
First, you will need to open your terminal and install these packages. 
- Type into the terminal  `npm i discord.js` this will download the api for discord.
- Next, Type into the terminal `npm i @discordjs/rest` this will give you access to some nice commands to help you build your bot if you decide to add more.

After these installs you have to make one file called `config,json` this will be hiding your sensative information needed to run the bot.
You will be using 3 variables named `token`, `clientId`, and `guildId`

Your `token` will be your bots password which you will get from the develpers side of discord while setting up your bot.
Your `clientId` you will aslo find under the general information tab in your specific bot under the developers section of discord.
Your `guildId` can be find by right clickng the server you want to add it to and all the way at the bottom shoud be copy ID


Your `config.json` should look like this
`{
	"token": "Your token here",
	"clientId": "Your clientId here",
	"guildId": "Your guildId here"
}`
