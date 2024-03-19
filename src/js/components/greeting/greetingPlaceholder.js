import { getCurrentLang } from "../language.js/localStorageLanguage"
import { greetingName } from "./greetingName"

const greetingPlaceHolder = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

export const setPlaceHolder = () => {
	const currentLang = getCurrentLang()
	currentLang === 'en' ? greetingName.placeholder = greetingPlaceHolder.en : greetingName.placeholder = greetingPlaceHolder.ru
}