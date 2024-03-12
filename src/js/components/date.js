import { setCurrentLang, getCurrentLang } from "./changeLanguage"

const time = document.querySelector('.data__time')

const showTime = () => {
	const currentTime = new Date().toLocaleTimeString()
	time.textContent = currentTime
}

const date = document.querySelector('.data__date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}

const showDate = () => {
	const currentLang = getCurrentLang()
	const currentDate = new Date().toLocaleDateString(currentLang, dateOptions)
	date.textContent = currentDate
}

showDate()

const greetingText = document.querySelector('.greeting__text')

const greetingObj = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Доброго дня, ', 'Доброго вечера, ']
}

const greetingPlaceHolder = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

const showGreetingText = () => {
	const currentLang = getCurrentLang()
	const currentTime = new Date().getHours();
	const getGreeting = greetingObj[currentLang][Math.floor(currentTime / 6)]
	greetingText.textContent = getGreeting
	return getGreeting
}

showGreetingText()

const greetingName = document.querySelector('.greeting__name')

const setPlaceHolder = () => {
	const currentLang = getCurrentLang()
	currentLang === 'en' ? greetingName.placeholder = greetingPlaceHolder.en : greetingName.placeholder = greetingPlaceHolder.ru
}

setPlaceHolder()

const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

const getGreetingName = () => {
	const getName = localStorage.getItem('name')
	getName === null ? '' : greetingName.value = getName
}

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showTime()

window.addEventListener('beforeunload', () => {
	setGreetingName()
	setCurrentLang()
})
window.addEventListener('load', getGreetingName)



export { showDate, showGreetingText, setPlaceHolder }