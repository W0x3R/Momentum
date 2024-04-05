import { showDate } from "../date/date"
import { setStorageLanguage } from "../language/localStorageLanguage"
import { setStorageGreetingName } from "../greeting/localStorageGreeting"
import { getWeather } from "../weather/getWeather"
import { changeBGOnClick, changeQueryInput } from "../slider/changeBG"
import { checkFlagSong } from "../player/playSong"
import { prevSong, playClickedSong, nextSong } from "../player/switchSong"
import { rewindSong } from "../player/updateProgressBar"
import { rotateIcon, selectLanguageInner, selectImagesSrcWrapper } from "../transformIcons/transformIcons"
import { checkIsMute, checkChangeVolume } from "../player/volume"
import { changeImagesSrc } from "../imagesSrc/changeImagesSrc"
import { showGreeting } from "../greeting/showGreeting"
import { changePlaceholderText } from "../greeting/changePlaceholderText"
import { getQuotes } from "../quotes/getQuotes"
import { closeErrorPopup } from "../slider/controlErrorPopup"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { changeLanguageText } from "../language/changeLanguageText"
import { changeLanguageDescriptionText } from "../language/setLanguageText"
import { changeSrcDescriptionText } from "../imagesSrc/setImagesSrcText"
import { changeQueryLabelText } from "../query/setQueryLabelText"
import { openSettings } from "../settings/openSettings"
import { toggleSettingsActive } from "../settings/toggleSettingsActive"
import { closeSettings } from "../settings/closeSettings"

export const clickEvents = {
	'.main__button_prev': () => changeBGOnClick('prev'),
	'.main__button_next': () => changeBGOnClick('next'),
	'.language__inner': () => rotateIcon(selectLanguageInner, 'language__select_open'),
	'.source': () => rotateIcon(selectImagesSrcWrapper, 'source__select_open'),
	'.player__controls-play': checkFlagSong,
	'.player__progress': (e) => rewindSong(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute,
	'.popup__button': closeErrorPopup,
	'.popup__shadow_show': closeErrorPopup,
	'.settings__icon': () => {
		toggleSettingsActive(),
			openSettings()
	},
	'.settings__close-button': closeSettings
}

export const inputEvents = {
	'.player__sounds-volume': checkChangeVolume,
	'.greeting__name': setStorageGreetingName
}

export const changeEvents = {
	'.query__input': changeQueryInput,
	'.source__select': (e) => changeImagesSrc(e),
	'.language__select': () => {
		setStorageLanguage()
		getWeather()
		showDate()
		showGreeting()
		changePlaceholderText()
		getQuotes()
		changeLanguageText()
		changeLanguageIcon()
		changeLanguageDescriptionText()
		changeSrcDescriptionText()
		changeQueryLabelText()
	},
	'.weather__input': getWeather
}

export const callEvents = (e, eventsObject) => {
	const target = e.target
	for (const selector in eventsObject) {
		if (target.closest(selector)) {
			eventsObject[selector](e)
			break
		}
	}
}