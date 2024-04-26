import { greetingName } from "./localStorageGreeting"

const greetingObj = {
	en: '[Enter name]',
	ru: '[Введите имя]'
}

export const setPlaceholderText = (lang) => {
	greetingName.placeholder = greetingObj[lang]
}