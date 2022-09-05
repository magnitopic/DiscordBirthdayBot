const {
	SlashCommandBuilder,
	ModalBuilder,
	ActionRowBuilder,
	TextInputBuilder,
	TextInputStyle,
	InteractionType,
} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("newBirthdayReminder")
		.setDescription("Add a new Birthday reminder."),
	async execute(interaction) {
		const modal = new ModalBuilder()
			.setCustomId("newBirthday")
			.setTitle("New birthday reminder!");

		const favoriteColorInput = new TextInputBuilder()
			.setCustomId("favoriteColorInput")
			.setLabel("Name of the birthday boy")
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId("hobbiesInput")
			.setLabel("Birthday date. dd/mm")
			.setStyle(TextInputStyle.Short);

		const firstActionRow = new ActionRowBuilder().addComponents(
			favoriteColorInput
		);
		const secondActionRow = new ActionRowBuilder().addComponents(
			hobbiesInput
		);

		modal.addComponents(firstActionRow, secondActionRow);

		await interaction.showModal(modal);
	},
};
