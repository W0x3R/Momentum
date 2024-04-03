import { languageSelect } from "./setLanguageSelectedItem"

export const setStorageLanguageDefault = () => {
	const language = getStorageLanguage()
	if (!language) {
		localStorage.setItem('language', 'en')
	}
}

export const getStorageLanguage = () => localStorage.getItem('language')

export const setStorageLanguage = () => {
	localStorage.setItem('language', languageSelect.value)
}