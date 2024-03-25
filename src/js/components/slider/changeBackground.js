import { createClient } from 'pexels';
import { showGreetingText } from "../greeting/showGreetingMessage"
import { getCurrentLanguage } from "../language/localStorageLanguage"
import { getRandomNumber } from "./getRandomNumber"
import { translateGreeting } from "./translateGreeting"

const body = document.body
export const queryInput = document.querySelector('.query__input')
const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
let query = getCurrentLanguage() === 'ru' ? translateGreeting(greetingText) : greetingText
const image = new Image();
let randomNumberGithub = getRandomNumber(1, 20)
let randomNumberPixels = getRandomNumber(0, 80)

export const changeQueryInput = () => {
	query = queryInput.value
	changePexelsImages()
}

const changeGithubImages = () => {
	if (localStorage.getItem('source') === 'github') {
		queryInput.classList.add('query__input_hide')
		const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
		const currentLang = getCurrentLanguage();
		let value = currentLang === 'en' ? greetingText : translateGreeting(greetingText)
		let randomNumberForImages = randomNumberGithub.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNumberForImages}.webp`
		image.src = url;
		image.onload = () => body.style.backgroundImage = `url(${url})`
	}
}

const changePexelsImages = () => {
	if (localStorage.getItem('source') === 'pexels') {
		queryInput.classList.remove('query__input_hide')
		client.photos.search({ query, per_page: 80 }).then(photos => {
			try {
				image.src = photos.photos[randomNumberPixels - 1].src.landscape
				image.onload = () => body.style.backgroundImage = `url(${photos.photos[randomNumberPixels - 1].src.landscape})`
			}
			catch (e) {
				alert('Для данного запроса не найдены изображения')
				queryInput.value = ''
			}
		});
	}
}

export const changeBackground = () => {
	changeGithubImages()
	changePexelsImages()
}

export const changeBackgroundOnClick = (direction) => {
	if (localStorage.getItem('source') === 'github') {
		randomNumberGithub = (direction === 'prev') ?
			((randomNumberGithub === 1) ? 20 : randomNumberGithub - 1) :
			((randomNumberGithub === 20) ? 1 : randomNumberGithub + 1);
		changeBackground()
	}
	else if (localStorage.getItem('source') === 'pexels') {
		randomNumberPixels = (direction === 'prev') ?
			((randomNumberPixels === 1) ? 80 : randomNumberPixels - 1) :
			((randomNumberPixels === 80) ? 1 : randomNumberPixels + 1);
		changeBackground()
	}
}