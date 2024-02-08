const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const config = require('./config.json');
const { createCanvas, loadImage } = require('canvas');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ],
    allowedMentions: { parse: ['users', 'roles'] }
});

const startupMessage = 'This bot is created by: Will3m026';
console.log(startupMessage);

client.once('ready', () => {
    console.log('Bot is ready');

    // Register slash commands when bot is ready
    registerSlashCommands();
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    if (!interaction.member.roles.cache.some(role => config.allowedRoles.includes(role.id))) {
        return interaction.reply('You do not have permission to use this command.');
    }

    const command = interaction.commandName;

    if (command === config.commandName) {
        const title = interaction.options.getString('title');
        let description = interaction.options.getString('description') || 'No description provided';
        const imageChoice = interaction.options.getInteger('image');
        const titleColor = interaction.options.getString('titlecolor') || config.defaultHexColor;
        const descriptionColor = interaction.options.getString('descriptioncolor') || config.defaultHexColor;
        const lineColor = interaction.options.getString('linecolor') || config.defaultHexColor;

        const channel = client.channels.cache.get(config.channelId);
        if (!channel) return interaction.reply('Channel not found');

        try {
            // Get the selected image URL from the config
            const imageURL = config.templateImages[imageChoice - 1];
            if (!imageURL) return interaction.reply('Invalid image choice.');

            const canvas = createCanvas(1500, 500);
            const ctx = canvas.getContext('2d');
            
            // Load background image
            const backgroundImage = await loadImage(imageURL);
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            // Draw title with user-specified font color
            ctx.font = 'bold 72px Arial';
            ctx.fillStyle = titleColor; // User-specified title color
            ctx.textAlign = 'center';

            // Ensure title fits within canvas
            const maxWidth = 1300;
            let words = title.split(' ');
            let line = '';
            let y = 120;
            for (let i = 0; i < words.length; i++) {
                let testLine = line + words[i] + ' ';
                let metrics = ctx.measureText(testLine);
                let testWidth = metrics.width;
                if (testWidth > maxWidth && i > 0) {
                    ctx.fillText(line, canvas.width / 2, y);
                    line = words[i] + ' ';
                    y += 72; // Line height
                } else {
                    line = testLine;
                }
            }
            ctx.fillText(line, canvas.width / 2, y);

            // Draw a line to separate the title and description
            ctx.beginPath();
            ctx.moveTo(200, y + 60); // Adjusted y coordinate
            ctx.lineTo(1300, y + 60); // Adjusted y coordinate
            ctx.strokeStyle = lineColor; // User-specified line color
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.closePath();

            // Draw description with user-specified font color
            ctx.font = 'bold 36px Arial'; // Set the description text size
            ctx.fillStyle = descriptionColor; // User-specified description color

            // Split description into multiple lines if necessary
            y += 100; // Adjusted y coordinate
            const lineHeight = 36;
            words = description.split(' ');
            line = '';
            let lines = [];
            for (let i = 0; i < words.length; i++) {
                let testLine = line + words[i] + ' ';
                let metrics = ctx.measureText(testLine);
                let testWidth = metrics.width;
                if (testWidth > maxWidth && i > 0) {
                    lines.push(line);
                    line = words[i] + ' ';
                } else {
                    line = testLine;
                }
            }
            lines.push(line);
            for (let i = 0; i < lines.length; i++) {
                ctx.fillText(lines[i], canvas.width / 2, y + (i * lineHeight));
            }

            // Send the message with the image
            await channel.send({ files: [canvas.toBuffer()] });
            
            interaction.reply('Message sent successfully.');
        } catch (error) {
            console.error('Error sending message:', error);
            interaction.reply('An error occurred while sending the message.');
        }
    }
});

async function registerSlashCommands() {
    try {
        await client.guilds.cache.get(config.guildId)?.commands.set([
            new SlashCommandBuilder()
                .setName(config.commandName)
                .setDescription('Send a message')
                .addIntegerOption(option => option.setName('image').setDescription('Choose an image (1, 2, 3)').setRequired(true))
                .addStringOption(option => option.setName('title').setDescription('Title of the message').setRequired(true))
                .addStringOption(option => option.setName('description').setDescription('Description of the message'))
                .addStringOption(option => option.setName('titlecolor').setDescription('Title color in hex format (e.g., #RRGGBB)'))
                .addStringOption(option => option.setName('descriptioncolor').setDescription('Description color in hex format (e.g., #RRGGBB)'))
                .addStringOption(option => option.setName('linecolor').setDescription('Line color in hex format (e.g., #RRGGBB)'))
        ]);
        console.log('Slash commands registered successfully.');
    } catch (error) {
        console.error('Error registering slash commands:', error);
    }
}

client.login(config.token);
