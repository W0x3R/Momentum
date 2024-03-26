import { createClient } from 'pexels';
import { showGreetingText } from "../greeting/showGreetingMessage"
import { getCurrentLanguage } from "../language/localStorageLanguage"
import { getRandomNumber } from "./getRandomNumber"
import { translateGreeting } from "./translateGreeting"
import { showErrorPopup } from './controlErrorPopup';

export const body = document.body
const queryInput = document.querySelector('.query__input')
const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
let query = getCurrentLanguage() === 'ru' ? translateGreeting(greetingText) : greetingText
const image = new Image();
const MAX__GITHUB_IMAGES = 20;
let MAX__PEXELS_IMAGES;
let randomNumberGithub = getRandomNumber(1, MAX__GITHUB_IMAGES)
let randomNumberPixels;

const forbiddenSymbols = ['#', '%', '&', '+', ';']

export const changeQueryInput = () => {
	if (forbiddenSymbols.includes(queryInput.value)) {
		showErrorPopup()
		return
	}
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
		client.photos.search({ query, locale: 'ru-RU', per_page: 80 }).then(photos => {
			console.log(photos.photos[0]);
			if (photos && photos.photos && photos.photos.length > 1) {
				MAX__PEXELS_IMAGES = photos.photos.length
				randomNumberPixels = getRandomNumber(1, MAX__PEXELS_IMAGES)
				image.src = photos.photos[randomNumberPixels - 1].src.landscape
				image.onload = () => body.style.backgroundImage = `url(${photos.photos[randomNumberPixels - 1].src.landscape})`
			} else {
				showErrorPopup()
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
			((randomNumberGithub === 1) ? MAX__GITHUB_IMAGES : randomNumberGithub - 1) :
			((randomNumberGithub === MAX__GITHUB_IMAGES) ? 1 : randomNumberGithub + 1);
		changeGithubImages()
	}
	else if (localStorage.getItem('source') === 'pexels') {
		changePexelsImages()
	}
}