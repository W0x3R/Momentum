import { changeAppText } from "../changeAppText/changeAppText"
import { setStorageLanguage } from "../language/localStorageLanguage"
import { showDate } from "../date/date"
import { changeImagesSrc } from "../imagesSrc/changeImagesSrc"
import { changeQuote } from "../quotes/changeQuote"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { getWeather } from "../weather/getWeather"
import { changeQueryInput } from "../query/queryValues"
import { closeSettingsIcons } from "../settings/closeSettingsIcons"
import { languageSelect } from "../language/setSelectedLanguageValue"
import { imagesSrcSelect } from "../imagesSrc/setSelectedImagesSrc"

export const changeEvents = {
	'.query__input': changeQueryInput,
	'.source__select': (e) => {
		changeImagesSrc(e),
			closeSettingsIcons(imagesSrcSelect)
	},
	'.language__select': () => {
		setStorageLanguage()
		getWeather()
		showDate()
		changeAppText()
		changeQuote()
		changeLanguageIcon()
		closeSettingsIcons(languageSelect)
	},
	'.weather__input': getWeather
}