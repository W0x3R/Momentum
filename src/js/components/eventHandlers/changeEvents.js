import { changeAppText } from "../changeAppText/changeAppText"
import { setStorageLanguage } from "../language/localStorageLanguage"
import { showDate } from "../date/date"
import { changeImagesSrc } from "../imagesSrc/changeImagesSrc"
import { changeQuote } from "../quotes/changeQuote"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { fetchAndDisplayWeather } from "../weather/weatherAPI"
import { changePexelsImgOnQueryInputChange } from "../query/changePexelsImgOnQueryInputChange"
import { closeSettingsIcon } from "../settings/closeSettingsIcon"
import { languageSelect } from "../language/setSelectedLanguageValue"
import { imagesSrcSelect } from "../imagesSrc/setSelectedImagesSrc"

export const changeEvents = {
	'.query__input': changePexelsImgOnQueryInputChange,
	'.source__select': (e) => {
		changeImagesSrc(e),
			closeSettingsIcon(imagesSrcSelect)
	},
	'.language__select': () => {
		setStorageLanguage()
		fetchAndDisplayWeather()
		showDate()
		changeAppText()
		changeQuote()
		changeLanguageIcon()
		closeSettingsIcon(languageSelect)
	},
	'.weather__input': fetchAndDisplayWeather
}