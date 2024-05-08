import { changeAppText } from "../changeAppText/changeAppText"
import { setStorageLanguage } from "../language/localStorageLanguage"
import { showDate } from "../date/date"
import { changeImagesSrc } from "../imagesSrc/changeImagesSrc"
import { changeQuote } from "../quotes/changeQuote"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { getWeather } from "../weather/getWeather"
import { changeQueryInput } from "../query/queryValues"
import { arrowIconClose } from "../transformIcons/transformIcons"
import { languageSelect } from "../language/setSelectedLanguageValue"
import { imagesSrcSelect } from "../imagesSrc/setSelectedImagesSrc"

export const changeEvents = {
	'.query__input': changeQueryInput,
	'.source__select': (e) => {
		changeImagesSrc(e),
			arrowIconClose(imagesSrcSelect)
	},
	'.language__select': () => {
		setStorageLanguage()
		getWeather()
		showDate()
		changeAppText()
		changeQuote()
		changeLanguageIcon()
		arrowIconClose(languageSelect)
	},
	'.weather__input': getWeather
}