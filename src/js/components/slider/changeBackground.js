import { showGreetingText } from "../greeting/showGreetingMessage"
import { getCurrentLang } from "../language.js/localStorageLanguage"
import { getRandomNumber } from "./getRandomNumber"
import { translateGreeting } from "./getTimeOfDay"

const body = document.body
export const sliderButtonPrev = document.querySelector('.main__button_prev')
export const sliderButtonNext = document.querySelector('.main__button_next')

let randomNumber = getRandomNumber(1, 20)

export const changeBg = () => {
	const currentLang = getCurrentLang();
	const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
	let value = currentLang === 'en' ? greetingText : translateGreeting(greetingText)

	let randomNumberForImages = randomNumber.toString().padStart(2, '0')
	let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNumberForImages}.webp`
	const image = new Image();
	image.src = url;
	image.onload = () => body.style.backgroundImage = `url(${url})`
}

export const showBgOnClick = (direction) => {
	randomNumber = (direction === 'prev') ?
		((randomNumber === 1) ? 20 : randomNumber - 1) :
		((randomNumber === 20) ? 1 : randomNumber + 1);
	changeBg()
}
