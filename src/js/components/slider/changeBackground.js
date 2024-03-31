import { createClient } from 'pexels';
import { showGreetingText } from "../greeting/showGreetingMessage"
import { getStorageCurrentLanguage } from "../language/localStorageLanguage"
import { getRandomNumber } from "./getRandomNumber"
import { translateGreeting } from "./translateGreeting"
import { showErrorPopup } from './controlErrorPopup'
import { getQueryInputValueLoad } from './localStorageSlider'
import { getStorageImagesSource } from '../imagesSource/localStorageImageSource';

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
	const currentLanguage = getStorageCurrentLanguage()
	if (queryValue) {
		query = queryValue
	} else {
		query = currentLanguage === 'ru' ? translateGreeting(greetingText) : greetingText
	}
}

export const changeQueryInput = () => {
	const queryInputTrim = String(queryInput.value.trim())
	if (forbiddenSymbols.includes(queryInput.value) || queryInputTrim === '') {
		showErrorPopup()
		return
	}
	query = queryInput.value
	queryInput.value = queryInputTrim
	MIN__PEXELS_IMAGES = 0;
	changePexelsImages()
}

const changeGithubImages = () => {
	const imagesSource = getStorageImagesSource()
	if (imagesSource === 'github') {
		queryInput.classList.add('query__input_hide')
		const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
		const currentLang = getStorageCurrentLanguage();
		let value = currentLang === 'en' ? greetingText : translateGreeting(greetingText)
		let randomNumberForImages = randomNumberGithub.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNumberForImages}.webp`
		loadImage(url)
	}
}

const changePexelsImages = () => {
	const imagesSource = getStorageImagesSource()
	if (imagesSource === 'pexels') {
		queryInput.classList.remove('query__input_hide')
		client.photos.search({ query, locale: 'ru-RU', per_page: 80 }).then(photos => {
			if (photos && photos.photos && photos.photos.length > 1) {
				MAX__PEXELS_IMAGES = photos.photos.length - 1
				loadImage(photos.photos[MIN__PEXELS_IMAGES].src.landscape)
			} else {
				showErrorPopup()
			}
		});
	}
}

const loadImage = (url) => {
	image.src = url
	image.onload = () => body.style.backgroundImage = `url(${url})`
}

export const changeBackground = () => {
	changeGithubImages()
	changePexelsImages()
}

export const changeBackgroundOnClick = (direction) => {
	const imagesSource = getStorageImagesSource()
	if (imagesSource === 'github') {
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
	else if (imagesSource === 'pexels') {
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