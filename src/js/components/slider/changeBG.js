import { createClient } from 'pexels';
import { showGreeting } from "../greeting/showGreeting"
import { getStorageLanguage } from "../language/localStorageLanguage"
import { getRandomNum } from "./getRandomNum"
import { translateGreeting } from "./translateGreeting"
import { showErrorPopup } from './controlErrorPopup'
import { getQueryInputValueLoad } from './localStorageSlider'
import { getStorageImagesSrc } from '../imagesSrc/localStorageImagesSrc';

const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
export const body = document.body
const queryWrapper = document.querySelector('.setting__query')
export const queryInput = document.querySelector('.query__input')
const greetingText = showGreeting().split(' ')[1].slice(0, -1);
let query;
const image = new Image();
const MAX_GITHUB_IMAGES = 20;
let MIN_PEXELS_IMAGES = 0;
let MAX_PEXELS_IMAGES;
let randomNumGithub = getRandomNum(1, MAX_GITHUB_IMAGES)
let isAnimate = true
const forbiddenSymbols = ['#', '%', '&', '+', ';']

export const setQueryValue = () => {
	const queryValue = getQueryInputValueLoad()
	const currLang = getStorageLanguage()
	if (queryValue) {
		query = queryValue
	} else {
		query = currLang === 'ru' ? translateGreeting(greetingText) : greetingText
	}
}

export const changeQueryInput = () => {
	const queryInputValue = String(queryInput.value.trim())
	if (forbiddenSymbols.includes(queryInput.value) || queryInput === '') {
		showErrorPopup()
		return
	}
	query = queryInput.value
	queryInput.value = queryInputValue
	MIN_PEXELS_IMAGES = 0;
	changePexelsImages()
}

const changeGithubImages = () => {
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'github') {
		queryWrapper.classList.add('setting__query_hide')
		const greetingText = showGreeting().split(' ')[1].slice(0, -1);
		const currLang = getStorageLanguage();
		let value = currLang === 'en' ? greetingText : translateGreeting(greetingText)
		let randomNum = randomNumGithub.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNum}.webp`
		loadImage(url)
	}
}

const changePexelsImages = () => {
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'pexels') {
		queryWrapper.classList.remove('setting__query_hide')
		client.photos.search({ query, locale: 'ru-RU', per_page: 80 }).then(e => {
			if (e && e.photos && e.photos.length > 1) {
				MAX_PEXELS_IMAGES = e.photos.length - 1
				loadImage(e.photos[MIN_PEXELS_IMAGES].src.landscape)
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

export const changeBG = () => {
	changeGithubImages()
	changePexelsImages()
}

export const changeBGOnClick = (direction) => {
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'github') {
		if (isAnimate) {
			isAnimate = false
			randomNumGithub = (direction === 'prev') ?
				((randomNumGithub === 1) ? MAX_GITHUB_IMAGES : randomNumGithub - 1) :
				((randomNumGithub === MAX_GITHUB_IMAGES) ? 1 : randomNumGithub + 1);
			changeGithubImages()
		}
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
	else if (imagesSrc === 'pexels') {
		if (isAnimate) {
			isAnimate = false
			MIN_PEXELS_IMAGES = (direction === 'prev') ?
				((MIN_PEXELS_IMAGES === 0) ? MAX_PEXELS_IMAGES : MIN_PEXELS_IMAGES - 1) :
				((MIN_PEXELS_IMAGES === MAX_PEXELS_IMAGES) ? 0 : MIN_PEXELS_IMAGES + 1);
			changePexelsImages()
		}
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}