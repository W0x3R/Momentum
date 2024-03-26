import { showDate } from "../date/date"
import { setCurrentLanguage } from "../language/localStorageLanguage"
import { setGreetingName } from "../greeting/localStorageGreeting"
import { getWeather } from "../weather/getWeather"
import { changeBackgroundOnClick, changeQueryInput } from "../slider/changeBackground"
import { checkFlagSong } from "../player/playSong"
import { prevSong, playClickedSong, nextSong } from "../player/switchSong"
import { checkClickOnProgressBar } from "../player/updateProgressBar"
import { rotateIcon, selectLanguageWrapper, selectSourceImagesWrapper } from "../transformIcons/transformIcons"
import { checkIsMute, checkInputChangeVolume } from "../player/volume"
import { checkImageSourceSelectValue } from "../imagesSource/setSelectedImageSourceValue"
import { showGreetingText } from "../greeting/showGreetingMessage"
import { setPlaceHolderLanguage } from "../greeting/setPlaceholderLanguage"
import { getQuotes } from "../quotes/getQuotes"
import { closeErrorPopup } from "../slider/controlErrorPopup"

export const eventHandlersClick = {
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

export const eventHandlersInput = {
	'.player__sounds-volume': checkInputChangeVolume,
	'.greeting__name': setGreetingName
}

export const eventHandlersChange = {
	'.query__input': changeQueryInput,
	'.source__select': (e) => checkImageSourceSelectValue(e),
	'.language__select': () => {
		setCurrentLanguage()
		getWeather()
		showDate()
		showGreetingText()
		setPlaceHolderLanguage()
		getQuotes()
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