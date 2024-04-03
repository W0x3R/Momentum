import { getStorageLanguage } from "../language/localStorageLanguage"

export const getQuotesLanguage = () => {
	const currLang = getStorageLanguage()
	return currLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}