// util/feedback.js
module.exports = {
    name: "feedback",
    description: "Submit feedback.",
    run: async (client, interaction, args) => {

        await  interaction.reply({
            content: "Thanks for reaching out! We will be passing this along to the team directly! Good luck playing the game!",
        });
    },
};
