import { getStorageLanguage } from "./localStorageLanguage"
const language = document.querySelector('.language')

export const changeLanguageIcon = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		language.classList.remove('language_ru')
		language.classList.add('language_en')
	}
	else if (currLang === 'ru') {
		language.classList.remove('language_en')
		language.classList.add('language_ru')
	}
}