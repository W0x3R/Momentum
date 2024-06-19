import enQuotes from '../../../JSON/quotes-en.json'
import ruQuotes from '../../../JSON/quotes-ru.json'
import { getStorageLanguage } from "../language/languageStorage"

export const getQuotesLanguage = () => {
	const currLang = getStorageLanguage()
	return currLang === 'en' ? enQuotes : ruQuotes
}