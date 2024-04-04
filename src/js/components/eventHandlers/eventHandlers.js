import { showDate } from "../date/date"
import { setStorageLanguage } from "../language/localStorageLanguage"
import { setStorageGreetingName } from "../greeting/localStorageGreeting"
import { getWeather } from "../weather/getWeather"
import { changeBGOnClick, changeQueryInput } from "../slider/changeBG"
import { checkFlagSong } from "../player/playSong"
import { prevSong, playClickedSong, nextSong } from "../player/switchSong"
import { rewindSong } from "../player/updateProgressBar"
import { rotateIcon, selectLanguageWrapper, selectImagesSrcWrapper } from "../transformIcons/transformIcons"
import { checkIsMute, checkChangeVolume } from "../player/volume"
import { changeImagesSrc } from "../imagesSrc/changeImagesSrc"
import { showGreeting } from "../greeting/showGreeting"
import { setPlaceholderLanguage } from "../greeting/setPlaceholderLanguage"
import { getQuotes } from "../quotes/getQuotes"
import { closeErrorPopup } from "../slider/controlErrorPopup"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { changeLanguageText } from "../language/changeLanguageText"
import { changeLanguageDescriptionText } from "../language/setLanguageText"
import { changeSrcDescriptionText } from "../imagesSrc/setImagesSrcText"

export const clickEvents = {
	'.main__button_prev': () => changeBGOnClick('prev'),
	'.main__button_next': () => changeBGOnClick('next'),
	'.language': () => rotateIcon(selectLanguageWrapper, 'language__select_open'),
	'.source': () => rotateIcon(selectImagesSrcWrapper, 'source__select_open'),
	'.player__controls-play': checkFlagSong,
	'.player__progress': (e) => rewindSong(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute,
	'.popup__button': closeErrorPopup,
	'.popup__shadow_show': closeErrorPopup
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
		setPlaceholderLanguage()
		getQuotes()
		changeLanguageText()
		changeLanguageIcon()
		changeLanguageDescriptionText()
		changeSrcDescriptionText()
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