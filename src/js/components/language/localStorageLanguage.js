import { languageSelect } from "./setSelectedLanguageValue"

export const setDefaultCurrentLanguage = () => {
	if (!localStorage.getItem('language')) {
		localStorage.setItem('language', 'en')
	}
}

export const getCurrentLanguage = () => {
	return localStorage.getItem('language')
}

export const setCurrentLanguage = () => {
	localStorage.setItem('language', languageSelect.value)
}