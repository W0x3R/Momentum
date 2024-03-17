import { getCurrentLang, setCurrentLang } from "./changeLanguage"
const greetingText = document.querySelector('.greeting__text')

const greetingObj = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Добрый дня, ', 'Добрый вечер, ']
}

const greetingPlaceHolder = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

export const showGreetingText = () => {
	const currentLang = getCurrentLang()
	const currentTime = new Date().getHours();
	const getGreeting = greetingObj[currentLang][Math.floor(currentTime / 6)]
	greetingText.textContent = getGreeting
	return getGreeting
}

const greetingName = document.querySelector('.greeting__name')

export const setPlaceHolder = () => {
	const currentLang = getCurrentLang()
	currentLang === 'en' ? greetingName.placeholder = greetingPlaceHolder.en : greetingName.placeholder = greetingPlaceHolder.ru
}

export const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

export const getGreetingName = () => {
	const getName = localStorage.getItem('name')
	getName === null ? '' : greetingName.value = getName
}

