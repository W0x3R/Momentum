import { selectLanguageChildrenArray } from "./setLanguageSelectedItem"

const languageObject = {
	en: {
		en: 'English',
		ru: 'Russian'
	},
	ru: {
		en: 'Английский',
		ru: 'Русский'
	}
}

export const setLanguageSelectText = (valueOne, valueTwo, valueThree, valueFour) => {
	selectLanguageChildrenArray[0].textContent = languageObject[valueOne][valueTwo]
	selectLanguageChildrenArray[1].textContent = languageObject[valueThree][valueFour]
}