import { createClient } from 'pexels';
import { showGreetingText } from "../greeting/showGreetingMessage"
import { getCurrentLanguage } from "../language/localStorageLanguage"
import { getRandomNumber } from "./getRandomNumber"
import { translateGreeting } from "./translateGreeting"
import { showErrorPopup } from './controlErrorPopup';
import { getQueryInputValueLoad } from './localStorageSlider';

export const body = document.body
export const queryInput = document.querySelector('.query__input')

const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
let query;
const image = new Image();
const MAX__GITHUB_IMAGES = 20;
let MIN__PEXELS_IMAGES = 0;
let MAX__PEXELS_IMAGES;
let randomNumberGithub = getRandomNumber(1, MAX__GITHUB_IMAGES)
let isAnimate = true
const forbiddenSymbols = ['#', '%', '&', '+', ';']

export const setQueryValue = () => {
	const queryValue = getQueryInputValueLoad()
	const currentLanguage = getCurrentLanguage()
	if (queryValue) {
		query = queryValue
	} else {
		query = currentLanguage === 'ru' ? translateGreeting(greetingText) : greetingText
	}
}

export const changeQueryInput = () => {
	if (forbiddenSymbols.includes(queryInput.value) || String(queryInput.value.trim()) === '') {
		showErrorPopup()
		return
	}
	query = queryInput.value
	MIN__PEXELS_IMAGES = 0;
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
			if (photos && photos.photos && photos.photos.length > 1) {
				MAX__PEXELS_IMAGES = photos.photos.length - 1
				image.src = photos.photos[MIN__PEXELS_IMAGES].src.landscape
				image.onload = () => body.style.backgroundImage = `url(${photos.photos[MIN__PEXELS_IMAGES].src.landscape})`
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
		if (isAnimate) {
			isAnimate = false
			randomNumberGithub = (direction === 'prev') ?
				((randomNumberGithub === 1) ? MAX__GITHUB_IMAGES : randomNumberGithub - 1) :
				((randomNumberGithub === MAX__GITHUB_IMAGES) ? 1 : randomNumberGithub + 1);
			changeGithubImages()
		}
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
	else if (localStorage.getItem('source') === 'pexels') {
		if (isAnimate) {
			isAnimate = false
			MIN__PEXELS_IMAGES = (direction === 'prev') ?
				((MIN__PEXELS_IMAGES === 0) ? MAX__PEXELS_IMAGES : MIN__PEXELS_IMAGES - 1) :
				((MIN__PEXELS_IMAGES === MAX__PEXELS_IMAGES) ? 0 : MIN__PEXELS_IMAGES + 1);
			changePexelsImages()
		}
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}