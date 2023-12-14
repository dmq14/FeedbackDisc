// util/feedback.js
module.exports = {
    name: "feedback",
    description: "Submit feedback.",
    run: async (client, interaction, args) => {


        // Gửi thông tin đến máy chủ Express
        const response = await fetch("http://localhost:3000/api/comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: "aaa",
                discordUserId: interaction.user.id,
                discordUsername: interaction.user.username,
                discordChannelId: interaction.channel.id,
            }),
        });

        // Xử lý phản hồi từ máy chủ Express
        const data = await response.json();

        // Xử lý phản hồi từ máy chủ Discord
        await interaction.reply({
            content: `Thanks for reaching out! Your comment has been submitted. Comment ID: ${comment}`,
        });

        interaction.setCountdown(8000);
    },
};
