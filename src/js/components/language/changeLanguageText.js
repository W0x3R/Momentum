import { getStorageLanguage } from "./localStorageLanguage"
import { setLanguageText } from "./setLanguageText"

export const changeLanguageText = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		setLanguageText('en', 'en', 'en', 'ru')
	} else if (currLang === 'ru') {
		setLanguageText('ru', 'en', 'ru', 'ru')
	}
}