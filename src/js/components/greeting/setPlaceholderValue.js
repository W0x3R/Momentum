import { greetingName } from "./localStorageGreeting"

const greetingObj = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

export const setPlaceholderValue = (lang) => {
	greetingName.placeholder = greetingObj[lang]
}