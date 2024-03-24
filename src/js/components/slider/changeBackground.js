import { createClient } from 'pexels';
import { showGreetingText } from "../greeting/showGreetingMessage"
import { getCurrentLang } from "../language/localStorageLanguage"
import { getRandomNumber } from "./getRandomNumber"
import { translateGreeting } from "./translateGreeting"

const body = document.body
const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
const query = 'BMW';
let randomNumber = getRandomNumber(1, 20)
let randomNumberPixels = getRandomNumber(0, 74)


export const changeBg = () => {
	const image = new Image();
	if (localStorage.getItem('source') === 'github') {
		const currentLang = getCurrentLang();
		const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
		let value = currentLang === 'en' ? greetingText : translateGreeting(greetingText)

		let randomNumberForImages = randomNumber.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNumberForImages}.webp`
		image.src = url;
		image.onload = () => body.style.backgroundImage = `url(${url})`
	}
	else if (localStorage.getItem('source') === 'pexels') {
		client.photos.search({ query, per_page: 74 }).then(photos => {
			image.src = photos.photos[randomNumberPixels - 1].src.landscape
			image.onload = () => body.style.backgroundImage = `url(${photos.photos[randomNumberPixels - 1].src.landscape})`
		});
	}
}

export const showBgOnClick = (direction) => {
	if (localStorage.getItem('source') === 'github') {
		randomNumber = (direction === 'prev') ?
			((randomNumber === 1) ? 20 : randomNumber - 1) :
			((randomNumber === 20) ? 1 : randomNumber + 1);
		changeBg()
	}
	else if (localStorage.getItem('source') === 'pexels') {
		randomNumberPixels = (direction === 'prev') ?
			((randomNumberPixels === 1) ? 74 : randomNumberPixels - 1) :
			((randomNumberPixels === 74) ? 1 : randomNumberPixels + 1);
		changeBg()
	}
}

