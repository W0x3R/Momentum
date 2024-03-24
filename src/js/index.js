import { setCurrentLang } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceHolderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getGreetingName, setGreetingName } from './components/greeting/localStorageGreeting.js'
import { weatherCityInput, getWeather } from './components/weather/getWeather'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBg, showBgOnClick } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong, updateTime } from './components/player/updateLoadSong.js'
import { checkFlagSong } from './components/player/playSong.js'
import { audio, nextSong, prevSong, playClickedSong, volumeButton } from './components/player/switchSong.js'
import { updateProgressBar, checkClickOnProgressBar } from './components/player/updateProgressBar.js'
import { languageSelect, rotateLanguageIcon, closeLanguageIcon } from './components/language/transformIcon.js'
import { checkIsMute, setButtonValueContentLoaded, checkInputChangeVolume } from './components/player/volume.js'
import { setSelectedSourceValue } from './components/imageSource/setSelectedImageSourceValue'
import { setSelectedLanguageValue } from './components/language/setSelectedLanguageValue.js'

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showDate()
showTime()
showGreetingText()
setPlaceHolderLanguage()
changeBg()
getQuotes()
createPlayList()
loadSong()

window.addEventListener('beforeunload', () => {
	setGreetingName()
	setCurrentLang()
	setCity()
})

window.addEventListener('load', () => {
	getGreetingName()
	getCity()
	setSelectedSourceValue()
	setSelectedLanguageValue()
})


weatherCityInput.addEventListener('change', getWeather)

audio.addEventListener('timeupdate', function (e) {
	updateTime()
	updateProgressBar(e)
})

languageSelect.addEventListener('change', () => {
	setCurrentLang()
	getWeather()
	showDate()
	showGreetingText()
	setPlaceHolderLanguage()
	getQuotes()
})

const eventHandlers = {
	'.main__button_prev': () => showBgOnClick('prev'),
	'.main__button_next': () => showBgOnClick('next'),
	'.language': rotateLanguageIcon,
	'.player__controls-play': checkFlagSong,
	'.player__progress': (e) => checkClickOnProgressBar(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute
}

window.addEventListener('click', function (e) {
	const target = e.target
	for (const selector in eventHandlers) {
		if (target.closest(selector)) {
			eventHandlers[selector](e)
			break
		}
	}
	closeLanguageIcon(e)
})

audio.addEventListener('ended', function () {
	nextSong()
})

volumeButton.addEventListener('input', function () {
	checkInputChangeVolume()
})

document.addEventListener('DOMContentLoaded', function (e) {
	setButtonValueContentLoaded()
});

import './components/imageSource/setSelectedImageSourceValue'