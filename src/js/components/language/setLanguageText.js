import { getStorageLanguage } from './localStorageLanguage'
import { selectLanguageChildrenArr } from "./setLanguageSelectedItem"

const languageDescription = document.querySelector('.language__description')

const languageObj = {
	en: {
		en: 'English',
		ru: 'Russian'
	},
	ru: {
		en: 'Английский',
		ru: 'Русский'
	}
}

const languageDescriptionObj = {
	en: 'Change language:',
	ru: 'Изменить язык:'
}

export const setLanguageText = (valOne, valTwo, valThree, valFour) => {
	selectLanguageChildrenArr[0].textContent = languageObj[valOne][valTwo]
	selectLanguageChildrenArr[1].textContent = languageObj[valThree][valFour]
}

const setLanguageDescriptionText = (lang) => {
	languageDescription.textContent = languageDescriptionObj[lang]
}

export const changeLanguageDescriptionText = () => {
	const currLang = getStorageLanguage()
	currLang === 'en' ? setLanguageDescriptionText('en') : setLanguageDescriptionText('ru')
}