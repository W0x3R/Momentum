import { selectLanguageChildrenArr } from "./setSelectedLanguageValue"
import { languageText, languageDescriptionText } from "./languageText"

const languageDescription = document.querySelector('.language__description')

export const setLanguageText = (valOne, valTwo, valThree, valFour, lang) => {
	selectLanguageChildrenArr[0].label = languageText[valOne][valTwo]
	selectLanguageChildrenArr[1].label = languageText[valThree][valFour]
	languageDescription.textContent = languageDescriptionText[lang]
}