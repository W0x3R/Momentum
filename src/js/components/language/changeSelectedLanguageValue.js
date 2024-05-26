import { getStorageLanguage } from "./languageStorage";
import { setSelectedLanguageValue } from "./setSelectedLanguageValue";

export const changeSelectedLanguageValue = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		setSelectedLanguageValue('ru', false)
		setSelectedLanguageValue('en', true)
	} else if (currLang === 'ru') {
		setSelectedLanguageValue('en', false)
		setSelectedLanguageValue('ru', true)
	}
}