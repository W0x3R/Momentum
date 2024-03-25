import { languageSelect } from "../transformIcons/transformIcons"


export const getCurrentLanguage = () => {
	if (!localStorage.getItem('language')) {
		localStorage.setItem('language', 'en')
	} else {
		return localStorage.getItem('language')
	}
}

export const setCurrentLanguage = () => {
	localStorage.setItem('language', languageSelect.value)
}