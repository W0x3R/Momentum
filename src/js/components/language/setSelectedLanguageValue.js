import { getStorageCurrentLanguage } from "./localStorageLanguage";
import { setLanguageSelectedItem } from "./setLanguageSelectedItem";

export const changeLanguageSelectedItem = () => {
	const lang = getStorageCurrentLanguage()
	if (lang === 'en') {
		setLanguageSelectedItem('ru', false)
		setLanguageSelectedItem('en', true)
	} else if (lang === 'ru') {
		setLanguageSelectedItem('en', false)
		setLanguageSelectedItem('ru', true)
	}
}