import { greetingName } from "./localStorageGreeting"

const greetingObj = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

export const setPlaceholderText = (lang) => {
	greetingName.placeholder = greetingObj[lang]
}