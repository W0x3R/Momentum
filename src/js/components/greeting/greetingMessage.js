import { getCurrentLang } from "../language.js/localStorageLanguage"

const greetingText = document.querySelector('.greeting__text')

const greetingObj = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Добрый дня, ', 'Добрый вечер, ']
}

export const showGreetingText = () => {
	const currentLang = getCurrentLang()
	const currentTime = new Date().getHours();
	const getGreeting = greetingObj[currentLang][Math.floor(currentTime / 6)]
	greetingText.textContent = getGreeting
	return getGreeting
}