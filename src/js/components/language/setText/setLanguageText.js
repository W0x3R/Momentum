import { selectLanguageChildrenArr } from "../setSelectedLanguageValue"
import { languageSelectText } from "./languageSelectText"
import { languageDescriptionText } from "./languageDescriptionText"

const languageDescription = document.querySelector('.language__description')

export const setLanguageText = (valOne, valTwo, valThree, valFour, lang) => {
	selectLanguageChildrenArr[0].label = languageSelectText[valOne][valTwo]
	selectLanguageChildrenArr[1].label = languageSelectText[valThree][valFour]
	languageDescription.textContent = languageDescriptionText[lang]
}