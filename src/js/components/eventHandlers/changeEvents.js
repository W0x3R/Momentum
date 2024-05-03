import { showDate } from "../date/date"
import { setStorageLanguage } from "../language/localStorageLanguage"
import { changeImagesSrc } from "../imagesSrc/changeImagesSrc"
import { changeAppText } from "../changeAppText/changeAppText"
import { changeQuote } from "../quotes/changeQuote"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { getWeather } from "../weather/getWeather"
import { changeQueryInput } from "../query/queryValues"

export const changeEvents = {
	'.query__input': changeQueryInput,
	'.source__select': (e) => changeImagesSrc(e),
	'.language__select': () => {
		setStorageLanguage()
		getWeather()
		showDate()
		changeAppText()
		changeQuote()
		changeLanguageIcon()
	},
	'.weather__input': getWeather
}