import { getCurrentLanguage } from "../language/localStorageLanguage"

export const getQuotesLanguage = () => {
	const currentLang = getCurrentLanguage()
	return currentLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}