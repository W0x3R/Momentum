import { getCurrentLanguage } from "../language/localStorageLanguage"
import { greetingName } from "./localStorageGreeting"

const greetingPlaceHolder = {
	en: '[Enter your name]',
	ru: '[Введите ваше имя]'
}

export const setPlaceHolderLanguage = () => {
	const currentLanguage = getCurrentLanguage()
	currentLanguage === 'en' ? greetingName.placeholder = greetingPlaceHolder.en : greetingName.placeholder = greetingPlaceHolder.ru
}