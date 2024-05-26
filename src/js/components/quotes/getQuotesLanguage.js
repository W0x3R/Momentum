import { getStorageLanguage } from "../language/languageStorage"

export const getQuotesLanguage = () => {
	const currLang = getStorageLanguage()
	return currLang === 'en' ? 'quotes-en.json' : 'quotes-ru.json'
}