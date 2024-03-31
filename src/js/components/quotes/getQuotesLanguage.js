import { getStorageCurrentLanguage } from "../language/localStorageLanguage"

export const getQuotesLanguage = () => {
	const currentLang = getStorageCurrentLanguage()
	return currentLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}