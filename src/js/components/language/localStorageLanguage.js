import { languageSelect } from "./transformIcon"

export const getCurrentLang = () => {
	if (!localStorage.getItem('language')) {
		localStorage.setItem('language', 'en')
	}
	else {
		return localStorage.getItem('language')
	}
}

export const setCurrentLang = () => {
	localStorage.setItem('language', languageSelect.value)
}