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


## Discord Bot Usage Guide

### Overview
This guide provides step-by-step instructions on how to effectively use the Discord bot in your server. The bot is designed to send messages with specified text onto images, allowing for customizable and visually appealing messages.

### Installation
1. **Invite the Bot**: Invite the bot to your Discord server using its client ID and the necessary permissions.
2. **Configuration**: Configure the `config.json` file with the required parameters such as the bot token, guild ID, channel ID, allowed roles, default color, and template images.

### Command Syntax
To interact with the bot, use the following command syntax:

```
/<command_name> --image <image_number> --title <message_title> --description <message_description> --color <message_color>
```

- `<command_name>`: The name of the slash command configured in the bot.
- `<image_number>`: Choose an image template from the available options (1, 2, 3).
- `<message_title>`: The title of the message to be displayed on the image.
- `<message_description>`: The description text of the message (optional).
- `<message_color>`: The color of the text (optional).

### Usage
1. **Interacting with the Bot**:
   - Type the slash command in any text channel where the bot is present.
   - Replace the placeholders with your desired values.
   - Press Enter to send the command.

2. **Viewing Results**:
   - The bot will process the command and generate an image with the specified text.
   - The generated image will be sent to the designated channel for viewing by you and other users in the server.

### Troubleshooting
- If you encounter any issues or errors while using the bot, check the console logs for error messages.
- Console logs can provide insights into what went wrong and how to address it.

### Customization
- Customize the bot further by modifying the code to add additional functionalities or tweaking existing features to better suit your server's needs.

---

By following these instructions, you can effectively utilize the Discord bot to send messages with text onto images in your server.

## Configuration
The bot requires a `config.json` file with the following structure:
```json
{
  "token": "YOUR_DISCORD_BOT_TOKEN",
  "guildId": "YOUR_DISCORD_GUILD_ID",
  "commandName": "YOUR_SLASH_COMMAND_NAME",
  "allowedRoles": ["ROLE_ID_1", "ROLE_ID_2"],
  "defaultColor": "DEFAULT_COLOR",
  "channelId": "CHANNEL_ID",
  "templateImages": ["IMAGE_URL_1", "IMAGE_URL_2", "IMAGE_URL_3"]
}
