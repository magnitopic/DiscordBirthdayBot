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
		.setName("newreminder")
		.setDescription("Add a new Birthday reminder."),
	async execute(interaction) {
		const modal = new ModalBuilder()
			.setCustomId("newBirthday")
			.setTitle("New birthday reminder!");

		const date = new TextInputBuilder()
			.setCustomId("date")
			.setLabel("Birthday date. dd/mm")
			.setStyle(TextInputStyle.Short);

		const secondActionRow = new ActionRowBuilder().addComponents(date);

		modal.addComponents(secondActionRow);

		await interaction.showModal(modal);
	},
};
