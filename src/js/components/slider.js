import { showGreetingText } from "./greeting"
import { getCurrentLang } from "./changeLanguage"

const body = document.body
const sliderButtonPrev = document.querySelector('.main__button_prev')
const sliderButtonNext = document.querySelector('.main__button_next')

const getRandomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = getRandomNumber(1, 20)

const greetingTranslations = {
	ночи: 'night',
	утро: 'morning',
	дня: 'afternoon',
	вечер: 'evening'
};

const translateGreeting = (greetingText) => {
	return greetingTranslations[greetingText];
};

const changeBg = () => {
	const currentLang = getCurrentLang();
	const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
	let value = currentLang === 'en' ? greetingText : translateGreeting(greetingText)

	let randomNumberForImages = randomNumber.toString().padStart(2, '0')
	let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNumberForImages}.webp`
	const image = new Image();
	image.src = url;
	image.onload = () => body.style.backgroundImage = `url(${url})`
}

const showBgOnLoad = () => changeBg()

showBgOnLoad()

const showBgOnClick = (direction) => {
	randomNumber = (direction === 'prev') ?
		((randomNumber === 1) ? 20 : randomNumber - 1) :
		((randomNumber === 20) ? 1 : randomNumber + 1);
	changeBg()
}

sliderButtonPrev.addEventListener('click', () => showBgOnClick('prev'))
sliderButtonNext.addEventListener('click', () => showBgOnClick('next'))

export { getRandomNumber }