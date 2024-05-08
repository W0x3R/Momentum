import { getRandomNum } from "./getRandomNum";
import { getStorageLanguage } from "../language/localStorageLanguage";
import { showGreetingText } from "../greeting/showGreetingText";
import { translateGreeting } from "./translateGreeting";
import { getStorageImagesSrc } from "../imagesSrc/localStorageImagesSrc";
import { queryWrapper } from "../query/queryValues";
import { loadImage } from "./loadImage";

let isAnimate = true
const MAX_GITHUB_IMAGES = 20;
let randomNumGithub = getRandomNum(1, MAX_GITHUB_IMAGES)

export const changeGithubImages = () => {
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

export const changeGithubImagesClick = (direction) => {
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
}