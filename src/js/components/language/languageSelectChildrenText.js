import { selectLanguageChildrenArray } from "./setSelectedLanguageValue"
import { getStorageCurrentLanguage } from "./localStorageLanguage"

const languageSelectObject = {
	en: {
		en: 'ENGLISH',
		ru: 'RUSSIAN'
	},
	ru: {
		en: 'АНГЛИЙСКИЙ',
		ru: 'РУССКИЙ'
	}
}

const setLanguageSelectChildrenText = (valueOne, valueTwo, valueThree, valueFour) => {
	selectLanguageChildrenArray[0].textContent = languageSelectObject[valueOne][valueTwo]
	selectLanguageChildrenArray[1].textContent = languageSelectObject[valueThree][valueFour]
}

export const changeLanguageSelectChildrenText = () => {
	const currentLanguage = getStorageCurrentLanguage()
	if (currentLanguage === 'en') {
		setLanguageSelectChildrenText('en', 'en', 'en', 'ru')
	} else if (currentLanguage === 'ru') {
		setLanguageSelectChildrenText('ru', 'en', 'ru', 'ru')
	}
}