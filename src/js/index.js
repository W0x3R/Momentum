import { setDefaultCurrentLanguage, setCurrentLanguage } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceHolderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getGreetingName, setGreetingName } from './components/greeting/localStorageGreeting.js'
import { getWeather } from './components/weather/getWeather'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBackground, changeBackgroundOnClick, changeQueryInput } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong, updateTime } from './components/player/updateLoadSong.js'
import { checkFlagSong } from './components/player/playSong.js'
import { audio, nextSong, prevSong, playClickedSong } from './components/player/switchSong.js'
import { updateProgressBar, checkClickOnProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageWrapper, selectSourceImagesWrapper, rotateIcon, closeIcon } from './components/transformIcons/transformIcons.js'
import { checkIsMute, setButtonValueContentLoaded, checkInputChangeVolume } from './components/player/volume.js'
import { setSelectedLanguageValue } from './components/language/setSelectedLanguageValue.js'
import { checkImageSourceSelectValue, setSelectedSourceValue } from './components/imagesSource/setSelectedImageSourceValue.js'
import { setImagesSourceDefault } from './components/imagesSource/localStorageImageSource.js'

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showDate()
showTime()
showGreetingText()
setPlaceHolderLanguage()
getQuotes()
createPlayList()
loadSong()
setSelectedLanguageValue()
setSelectedSourceValue()
getCity()
getGreetingName()
changeBackground()
setButtonValueContentLoaded()

window.addEventListener('beforeunload', () => {
	setDefaultCurrentLanguage()
	setImagesSourceDefault()
	setCity()
})


audio.addEventListener('timeupdate', function (e) {
	updateTime()
	updateProgressBar(e)
})

const eventHandlersClick = {
	'.main__button_prev': () => changeBackgroundOnClick('prev'),
	'.main__button_next': () => changeBackgroundOnClick('next'),
	'.language': () => rotateIcon(selectLanguageWrapper, 'language__select_open'),
	'.source': () => rotateIcon(selectSourceImagesWrapper, 'source__select_open'),
	'.player__controls-play': checkFlagSong,
	'.player__progress': (e) => checkClickOnProgressBar(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute
}

window.addEventListener('click', function (e) {
	const target = e.target
	for (const selector in eventHandlersClick) {
		if (target.closest(selector)) {
			eventHandlersClick[selector](e)
			break
		}
	}
	closeIcon(e, 'language__select', selectLanguageWrapper, 'language__select_open')
	closeIcon(e, 'source__select', selectSourceImagesWrapper, 'source__select_open')
})

audio.addEventListener('ended', nextSong)

const eventHandlersInput = {
	'.player__sounds-volume': checkInputChangeVolume,
	'.greeting__name': setGreetingName
}

window.addEventListener('input', function (e) {
	let target = e.target;
	for (const selector in eventHandlersInput) {
		if (target.closest(selector)) {
			eventHandlersInput[selector](e)
			break
		}
	}
})

const eventHandlersChange = {
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

window.addEventListener('change', function (e) {
	const target = e.target
	for (const selector in eventHandlersChange) {
		if (target.closest(selector)) {
			eventHandlersChange[selector](e)
			break
		}
	}
})