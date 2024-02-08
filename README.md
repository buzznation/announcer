# Announcer

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Introduction
Introducing Announcer!
Announcer is a dynamic Discord bot equipped with the unique ability to overlay text directly onto images, bringing your messages to life like never before. With Announcer, you can easily customize text color to suit your preferences, creating visually stunning announcements, memes, and more.
What sets Announcer apart is its seamless integration with the config file, allowing you to effortlessly manage and update your image library. Simply add or remove images as desired, and Announcer will automatically incorporate them into its repertoire. Each image is sized perfectly at 1500x500, ensuring optimal display quality and compatibility across platforms.
Experience the power of Announcer and elevate your Discord server with captivating visuals and engaging announcements. Try it out today and see the difference it can make!

## Features

1. **Dynamic Image Overlay**: Ability to write text directly onto images, allowing for visually engaging announcements and messages.
2. **Customizable Text Color**: Easily adjust text color to suit your preferences, enhancing the visual appeal of your messages.
3. **Configurable Image Library**: Manage and update your image library seamlessly through the config file, enabling effortless addition and removal of images.
4. **Optimal Image Size**: Each image is sized perfectly at 1500x500, ensuring optimal display quality and compatibility across platforms.

## Installation
To install and set up this Discord bot, follow these steps:
1. **Clone the Repository**: Clone the GitHub repository containing the bot's code to your local machine using the following command:
   ```
   git clone <repository_url>
   ```
2. **Navigate to the Project Directory**: Change your current directory to the cloned repository's directory:
   ```
   cd <repository_directory>
   ```
3. **Install Dependencies**: Install the required dependencies by running the following command:
   ```
   npm install discord.js canvas
   ```
4. **Configure the Bot**: Update the `config.json` file with your bot token, guild ID, channel ID, allowed roles, default color, template images, and any other necessary configurations.
5. **Run the Bot**: Start the bot by running the main script file using Node.js:
   ```
   node bot.js
   ```
6. **Verify Bot Startup**: Check your console for the "Bot is ready" message, indicating that the bot has started successfully.
7. **Set Up Slash Commands (Optional)**: If you want to enable slash commands, ensure your bot has the necessary permissions in your Discord server, then register the commands using the provided script.
8. **Test the Bot**: Interact with the bot in your Discord server to ensure it functions as expected.

With these steps completed, your Discord bot should be up and running, ready to serve your server's needs!


## Usage Guide for Announcer Bot

This guide provides instructions on how to use Announcer Bot, a Discord bot that allows you to send customized messages with titles, descriptions, and various visual elements.

### Usage
1. **Run the Bot**
   - Start the bot by running `node bot.js` in your terminal.
2. **Adding the Bot to Your Server**
   - Go to the Discord Developer Portal and invite the bot to your server using the OAuth2 URL generated for your application.
3. **Setting Up Slash Command**
   - Before using the bot, you need to set up a slash command in your Discord server.
   - Use the Discord Developer Portal or any bot management dashboard to create a new slash command with the name specified in the `config.json` file.
4. **Using Slash Command**
   - After setting up the slash command, you can use it to interact with the bot.
   - Use the command followed by options to send a customized message.
     - `image`: Choose an image (1, 2, 3).
     - `title`: Title of the message (required).
     - `description`: Description of the message.
     - `titlecolor`: Title color in hex format (e.g., #RRGGBB).
     - `descriptioncolor`: Description color in hex format (e.g., #RRGGBB).
     - `linecolor`: Line color in hex format (e.g., #RRGGBB).
5. **Example Command**
   - `/announce image=1 title=Welcome description=Hello, this is a test message! titlecolor=#FF0000`

### Additional Notes
- Ensure that the bot has the necessary permissions to read messages, send messages, and manage roles in the specified channel.
- Make sure that the images referenced in the `config.json` file are accessible and valid URLs.
- Customize the bot's behavior by modifying the code according to your requirements.

### Support
For any issues or questions, please open an issue on the [GitHub repository issues](#) page.

Thank you for using Announcer Bot!


## Configuration
The bot requires a `config.json` file with the following structure:
```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN_HERE",
  "guildId": "YOUR_GUILD_ID_HERE",
  "channelId": "YOUR_CHANNEL_ID_HERE",
  "commandName": "YOUR_COMMAND_NAME_HERE",
  "defaultHexColor": "#FFFFFF",
  "allowedRoles": [
      "ROLE_ID_1",
      "ROLE_ID_2"
  ],
  "templateImages": [
      "IMAGE_URL_1",
      "IMAGE_URL_2",
      "IMAGE_URL_3"
  ]
}

