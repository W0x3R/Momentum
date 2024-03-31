import { languageSelect } from "./setSelectedLanguageValue"

export const setStorageDefaultCurrentLanguage = () => {
	const language = getStorageCurrentLanguage()
	if (!language) {
		localStorage.setItem('language', 'en')
	}
}

export const getStorageCurrentLanguage = () => localStorage.getItem('language')

export const setStorageCurrentLanguage = () => {
	localStorage.setItem('language', languageSelect.value)
}