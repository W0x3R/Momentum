import { getStorageCurrentLanguage } from "./localStorageLanguage"
const language = document.querySelector('.language')

export const changeLanguageSelectIcon = () => {
	const currentLanguage = getStorageCurrentLanguage()
	if (currentLanguage === 'en') {
		language.classList.remove('language_ru')
		language.classList.add('language_en')
	}
	else if (currentLanguage === 'ru') {
		language.classList.remove('language_en')
		language.classList.add('language_ru')
	}
}