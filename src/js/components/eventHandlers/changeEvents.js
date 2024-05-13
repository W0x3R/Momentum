import { changeAppText } from "../changeAppText/changeAppText"
import { setStorageLanguage } from "../language/localStorageLanguage"
import { showDate } from "../date/date"
import { changeImagesSrc } from "../imagesSrc/changeImagesSrc"
import { changeQuote } from "../quotes/changeQuote"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { getWeather } from "../weather/getWeather"
import { changeQueryInput } from "../query/queryValues"
import { closeSettingsIcon } from "../settings/closeSettingsIcon"
import { languageSelect } from "../language/setSelectedLanguageValue"
import { imagesSrcSelect } from "../imagesSrc/setSelectedImagesSrc"

export const changeEvents = {
	'.query__input': changeQueryInput,
	'.source__select': (e) => {
		changeImagesSrc(e),
			closeSettingsIcon(imagesSrcSelect)
	},
	'.language__select': () => {
		setStorageLanguage()
		getWeather()
		showDate()
		changeAppText()
		changeQuote()
		changeLanguageIcon()
		closeSettingsIcon(languageSelect)
	},
	'.weather__input': getWeather
}