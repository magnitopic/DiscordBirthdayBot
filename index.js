const fs = require("node:fs");
const path = require("node:path");
const {
	Client,
	Collection,
	GatewayIntentBits,
	InteractionType,
} = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
	.readdirSync(commandsPath)
	.filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once("ready", () => {
	console.log("Ready!");
});

const checkDateFormat = function (input) {};

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: "There was an error while executing this command!",
			ephemeral: true,
		});
	}
});

client.on("interactionCreate", async (interaction) => {
	if (interaction.type !== InteractionType.ModalSubmit) return;
	if (interaction.customId === "newBirthday") {
		var test;
		console.log("-----New Birthday-----");
		interaction.fields.fields.forEach((e) => {
			console.log(e.value);
			test = e.value;
		});
		if (checkDateFormat(test)) {
			await interaction.reply(
				"Your submission was received successfully!"
			);
		} else {
			await interaction.reply("Date format invalid.");
		}
	}
});

client.login(token);
