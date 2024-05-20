import { languageSelectText } from "./languageSelectText"
import { selectLanguageChildrenArr } from "../setSelectedLanguageValue"

export const setLanguageSelectText = (valOne, valTwo, valThree, valFour,) => {
	selectLanguageChildrenArr[0].label = languageSelectText[valOne][valTwo]
	selectLanguageChildrenArr[1].label = languageSelectText[valThree][valFour]
}