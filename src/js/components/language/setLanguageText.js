import { selectLanguageChildrenArr } from "./setLanguageSelectedItem"

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

export const setLanguageText = (valOne, valTwo, valThree, valFour) => {
	selectLanguageChildrenArr[0].textContent = languageObj[valOne][valTwo]
	selectLanguageChildrenArr[1].textContent = languageObj[valThree][valFour]
}