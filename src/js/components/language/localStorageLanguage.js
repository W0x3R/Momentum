import { languageSelect } from "./setSelectedLanguageValue"

export const setStorageLanguageDefault = () => {
	const currLang = getStorageLanguage()
	if (!currLang) {
		localStorage.setItem('language', 'en')
	}
}

export const getStorageLanguage = () => localStorage.getItem('language')

export const setStorageLanguage = () => {
	localStorage.setItem('language', languageSelect.value)
}