import { getStorageCurrentLanguage } from "./localStorageLanguage"
import { setLanguageSelectText } from "./setLanguageSelectText"

export const changeLanguageSelectText = () => {
	const currentLanguage = getStorageCurrentLanguage()
	if (currentLanguage === 'en') {
		setLanguageSelectText('en', 'en', 'en', 'ru')
	} else if (currentLanguage === 'ru') {
		setLanguageSelectText('ru', 'en', 'ru', 'ru')
	}
}