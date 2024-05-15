import { getStorageLanguage } from "../language/localStorageLanguage"

const greetingText = document.querySelector('.greeting__text')
const greetingMessageText = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Добрый день, ', 'Добрый вечер, ']
}

export const showGreetingText = () => {
	const currLang = getStorageLanguage()
	const currHour = new Date().getHours();
	const greeting = greetingMessageText[currLang][Math.floor(currHour / 6)]
	greetingText.textContent = greeting
	return greeting
}