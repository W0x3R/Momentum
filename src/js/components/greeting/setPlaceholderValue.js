import { greetingName } from "./localStorageGreeting"

const greetingObject = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

export const setPlaceholderValue = (language) => {
	greetingName.placeholder = greetingObject[language]
}