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
import { changeAppText } from "../changeAppText/changeAppText"
import { changeQuote } from "../quotes/changeQuote"
import { setErrorPopupClass } from "../slider/setErrorPopupClass"
import { changeLanguageIcon } from "../language/changeLanguageIcon"
import { openSettings } from "../settings/openSettings"
import { toggleSettingsActive } from "../settings/toggleSettingsActive"
import { closeSettings } from "../settings/closeSettings"
import { closeSettingsActive } from "../settings/removeSettingsActive"

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
	'.popup__button': () => {
		setErrorPopupClass('remove')
	},
	'.popup__shadow_show': () => {
		closeErrorPopup('remove')
	},
	'.settings__icon': () => {
		toggleSettingsActive(),
			openSettings()
	},
	'.settings__close-button': () => {
		closeSettings(),
			closeSettingsActive()
	},
	'.quotes__change-btn': changeQuote
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
		changeAppText()
		changeQuote()
		changeLanguageIcon()
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