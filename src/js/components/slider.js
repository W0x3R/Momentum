import { showGreetingText } from "./date"
const body = document.body
const sliderButtonPrev = document.querySelector('.main__button_prev')
const sliderButtonNext = document.querySelector('.main__button_next')

const getRandomNumber = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = getRandomNumber(1, 20)

const changeBg = () => {
	let randomNumberForImages = randomNumber.toString().padStart(2, '0')
	let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${showGreetingText()}/${randomNumberForImages}.webp`
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

