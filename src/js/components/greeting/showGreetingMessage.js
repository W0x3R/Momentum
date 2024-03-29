import { getCurrentLanguage } from "../language/localStorageLanguage"

const greetingText = document.querySelector('.greeting__text')

const greetingObject = {
	en: ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, '],
	ru: ['Доброй ночи, ', 'Доброе утро, ', 'Добрый день, ', 'Добрый вечер, ']
}

export const showGreetingText = () => {
	const currentLanguage = getCurrentLanguage()
	const currentTime = new Date().getHours();
	const getGreeting = greetingObject[currentLanguage][Math.floor(currentTime / 6)]
	greetingText.textContent = getGreeting
	return getGreeting
}