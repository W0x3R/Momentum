import { getCurrentLang } from "../language.js/localStorageLanguage"

export const getQuoteLanguage = () => {
	const currentLang = getCurrentLang()
	return currentLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}