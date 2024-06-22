# **Momentum** 

**Momentum** is an analog of the [app of the same name](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ru) of the Chrome Web Store. The application shows the time and user name. The background image and greeting change depending on the time of day.  
The app has a clock, image slider, weather widgets, audio player, quote of the day block, and settings. Local storage - local storage is used to store the user name and locality.

![readmePhoto](/assets/images/readmePhoto.png)

📋 Task: [Rolling Scopes School](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/momentum/momentum-stage1.md)

💻 Deploy: [Link](https://w0x3r.github.io/Momentum/)

## Technology stack

➖ HTML (SEO)

➖ SCSS (BEM)

➖ JavaScript (ES6)

➖ Webpack 5

## Features

✅ **Audio player (using native javascript):**

	➖ Playing and pausing songs.
	➖ Added a progress bar that shows the progress of the playback.
	➖ Moving the progress bar slider changes the current playback time of the track.
	➖ Display the current time of the playing track and the total time of the track.
	➖ The track name is displayed above the progress bar.
	➖ Switching songs (previous, next).
	➖ Changing the volume and saving the value to local storage.
	➖ Mute and unmute songs with the value saved to local storage.
	➖ Play and pause a track when you click on a song in the list.
	➖ The track that is currently playing stands out in style.
	➖ When the first track is finished playing, the next track is played automatically. The tracks are played in a circle: after the last track, the first track is played again.

✅ **Application settings:**

	➖ The settings box appears and disappears when you click on the settings label.
	➖ Changing the application language (Russian and English) with saving the value in local storage. The default language is English.
	➖ Change image source (github and pexels) with value saved to local storage. The default image source is github.
	➖ For the pexels image source, there is an option to search for images by tag.
	➖ When you enter a query to search for images by tag, that query is stored in local storage.
	➖ If a user enters an invalid/non-existent value to search for images by tag via the Pexels API, a popup window will appear to warn the user of the error.
	➖ Ability to hide/display the following blocks: player, weather, clock, date, greeting, quotes with value saved to local storage.
	➖ Ability to close settings by pressing escape or clicking outside the settings block.

✅ **Weather API:**

	➖ The default city is Gomel until the user enters a different city.
	➖ You can specify any city. The city is saved in local storage.
	➖ When you enter a city, the following data is displayed: weather icon, weather description, wind speed, humidity.
	➖ If the city is entered incorrectly, an error is displayed with a message.


✅ **User greeting:**

	➖ The text of the greeting changes depending on the time of day.
	➖ The user can enter his/her name. When the application page is reloaded, the user name is saved and its data is stored in local storage.
	➖ There is a limit on the number of characters you can enter. If the character limit is exceeded, a popup menu appears to notify the user of the error.

✅ **Image Slider (github, pexels api):**

	➖ If the image source is github (default), when the application is loaded or reloaded, the background image is selected from the GitHub image collection. The link to the background image is generated depending on the time of day and random image number on both the github source and the Pexels API, provided that the Pexels API does not have a value for image search by tag.
	➖ You can scroll through the images by clicking on the arrows on the sides of the screen.
	➖ If github is selected as the image source, the images are scrolled sequentially - after 18 images there are 19 (right arrow click), before 18 images there are 17 (left arrow click). If Pexels API is selected as the source of images, then the first of the images returned by API will be selected on loading and then they will be scrolled sequentially (after the first image there is the second one, after the last one there is the first one).
	➖ If Pexels API is selected as the image source, the last selected image will be saved to local storage.
	➖ If an invalid/non-existent query is entered for the Pexels API to search images by tag, a popup window appears warning the user of the error.

✅ **Clock and date:**

	➖ The time is displayed in 24-hour format, for example: 21:01:00.
	➖ The day of the week, number, and month are output.
	➖ The language and format of the date output is determined by the application language.

✅ **Widget Quote of the Day:**

	➖ When the application page loads, a random quote and its author are displayed.
	➖ Two JSON-files with quotations in Russian and English were used as a source.
	➖ When the page reloads, the quote is updated (replaced by another quote).
	➖ There is a button that, when clicked, updates the quote (replaces it with another one).

✅ **Adaptive:**

	➖ The application elements optimally occupy the page space.
	➖ The app displays correctly on both computer and mobile devices.

## Lighthouse

**Desktop** 

![lightHouse](/assets/images/lightHouse.png)


## Run the project locally:
To start working on the project on your local machine, please, make sure that you install [Git](https://git-scm.com/downloads) and [Node.js LTS](https://nodejs.org/en/download).

### Steps to start:
- Clone [repository](https://github.com/W0x3R/Momentum).
- Switch to the dev-page branch.
- Run `npm install` or `npm i` - to install all packages needed.
- Run `set NODE_ENV=development&&webpack serve` - to starts a local dev-server (The tab will open automatically in the browser).
- Run `set NODE_ENV=development&&webpack` - build the project for development.
- Run `set NODE_ENV=production&&webpack` - build the project for production.

