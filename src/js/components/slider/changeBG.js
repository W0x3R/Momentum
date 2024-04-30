import { createClient } from 'pexels';
import { query } from '../query/queryValues';
import { getStorageLanguage } from '../language/localStorageLanguage';
import { getRandomNum } from "./getRandomNum"
import { getStorageImagesSrc } from '../imagesSrc/localStorageImagesSrc';
import { showGreetingText } from '../greeting/showGreetingText';
import { getStorageNumPicturePexels, setStorageNumPicturePexels } from './localStorageSlider';
import { translateGreeting } from './translateGreeting';
import { setErrorPopupClass } from './setErrorPopupClass';

const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
const image = new Image();
const MAX_GITHUB_IMAGES = 20;
let MAX_PEXELS_IMAGES;
let randomNumGithub = getRandomNum(1, MAX_GITHUB_IMAGES)
let isAnimate = true
const queryWrapper = document.querySelector('.query')
export const body = document.body

const changeGithubImages = () => {
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'github') {
		queryWrapper.classList.add('query_hide')
		const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
		const currLang = getStorageLanguage();
		let value = currLang === 'en' ? greetingText : translateGreeting(greetingText)
		let randomNum = randomNumGithub.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNum}.webp`
		loadImage(url)
	}
}

export const changePexelsImages = () => {
	const imagesSrc = getStorageImagesSrc()
	const pexelsNumb = getStorageNumPicturePexels()
	if (imagesSrc === 'pexels') {
		queryWrapper.classList.remove('query_hide')
		client.photos.search({ query, locale: 'ru-RU', per_page: 80 }).then(e => {
			if (e && e.photos && e.photos.length > 1) {
				MAX_PEXELS_IMAGES = e.photos.length - 1
				if (!pexelsNumb) {
					setStorageNumPicturePexels(0)
					loadImage(e.photos[pexelsNumb].src.landscape)
				}
				else {
					pexelsNumb >= 0 ? loadImage(e.photos[pexelsNumb].src.landscape) : loadImage(e.photos[MAX_PEXELS_IMAGES + pexelsNumb].src.landscape)
				}
			} else {
				setErrorPopupClass('add')
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
	let pexelsNumb = getStorageNumPicturePexels()
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'github' && isAnimate) {
		isAnimate = false
		randomNumGithub = (direction === 'prev') ?
			((randomNumGithub === 1) ? MAX_GITHUB_IMAGES : randomNumGithub - 1) :
			((randomNumGithub === MAX_GITHUB_IMAGES) ? 1 : randomNumGithub + 1);
		changeGithubImages()
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
	else if (imagesSrc === 'pexels' && isAnimate) {
		isAnimate = false
		direction === 'prev' ? pexelsNumb <= 0 ? setStorageNumPicturePexels(MAX_PEXELS_IMAGES) : setStorageNumPicturePexels(--pexelsNumb) : pexelsNumb >= MAX_PEXELS_IMAGES ? setStorageNumPicturePexels(0) : setStorageNumPicturePexels(++pexelsNumb)
		changePexelsImages()
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}