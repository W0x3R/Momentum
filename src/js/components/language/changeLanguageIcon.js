import { getStorageLanguage } from "./localStorageLanguage"
import { selectLanguageInner } from "../transformIcons/transformIcons"

export const changeLanguageIcon = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		selectLanguageInner.classList.remove('language__inner_ru')
		selectLanguageInner.classList.add('language__inner_en')
	}
	else if (currLang === 'ru') {
		selectLanguageInner.classList.remove('language__inner_en')
		selectLanguageInner.classList.add('language__inner_ru')
	}
}