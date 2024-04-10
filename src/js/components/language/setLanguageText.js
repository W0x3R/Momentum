import { selectLanguageChildrenArr } from "./setSelectedLanguageValue"

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

export const setLanguageText = (valOne, valTwo, valThree, valFour, lang) => {
	selectLanguageChildrenArr[0].textContent = languageObj[valOne][valTwo]
	selectLanguageChildrenArr[1].textContent = languageObj[valThree][valFour]
	languageDescription.textContent = languageDescriptionObj[lang]
}