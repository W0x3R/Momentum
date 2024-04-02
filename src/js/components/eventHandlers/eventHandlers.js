import { showDate } from "../date/date"
import { setStorageCurrentLanguage } from "../language/localStorageLanguage"
import { setStorageGreetingName } from "../greeting/localStorageGreeting"
import { getWeather } from "../weather/getWeather"
import { changeBackgroundOnClick, changeQueryInput } from "../slider/changeBackground"
import { checkFlagSong } from "../player/playSong"
import { prevSong, playClickedSong, nextSong } from "../player/switchSong"
import { checkClickOnProgressBar } from "../player/updateProgressBar"
import { rotateIcon, selectLanguageWrapper, selectSourceImagesWrapper } from "../transformIcons/transformIcons"
import { checkIsMute, checkInputChangeVolume } from "../player/volume"
import { changeImagesSource } from "../imagesSource/changeImagesSource"
import { showGreetingText } from "../greeting/showGreetingMessage"
import { setPlaceholderLanguage } from "../greeting/setPlaceholderLanguage"
import { getQuotes } from "../quotes/getQuotes"
import { closeErrorPopup } from "../slider/controlErrorPopup"
import { changeSelectIcon } from "../language/setSelectedLanguageValue"
import { changeLanguageSelectChildrenText } from "../language/languageSelectChildrenText"

export const clickEvents = {
	'.main__button_prev': () => changeBackgroundOnClick('prev'),
	'.main__button_next': () => changeBackgroundOnClick('next'),
	'.language': () => rotateIcon(selectLanguageWrapper, 'language__select_open'),
	'.source': () => rotateIcon(selectSourceImagesWrapper, 'source__select_open'),
	'.player__controls-play': checkFlagSong,
	'.player__progress': (e) => checkClickOnProgressBar(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute,
	'.popup__button': closeErrorPopup,
	'.popup__shadow_show': closeErrorPopup
}

export const inputEvents = {
	'.player__sounds-volume': checkInputChangeVolume,
	'.greeting__name': setStorageGreetingName
}

export const changeEvents = {
	'.query__input': changeQueryInput,
	'.source__select': (e) => changeImagesSource(e),
	'.language__select': () => {
		setStorageCurrentLanguage()
		getWeather()
		showDate()
		showGreetingText()
		setPlaceholderLanguage()
		getQuotes()
		changeLanguageSelectChildrenText()
		changeSelectIcon()
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