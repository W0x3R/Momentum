import { setCurrentLanguage } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceHolderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getGreetingName, setGreetingName } from './components/greeting/localStorageGreeting.js'
import { weatherCityInput, getWeather } from './components/weather/getWeather'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBackground, changeBackgroundOnClick } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong, updateTime } from './components/player/updateLoadSong.js'
import { checkFlagSong } from './components/player/playSong.js'
import { audio, nextSong, prevSong, playClickedSong, volumeButton } from './components/player/switchSong.js'
import { updateProgressBar, checkClickOnProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageWrapper, selectSourceImagesWrapper, languageSelect, rotateLanguageIcon, closeLanguageIcon } from './components/transformIcons/transformIcons.js'
import { checkIsMute, setButtonValueContentLoaded, checkInputChangeVolume } from './components/player/volume.js'
import { setSelectedSourceValue } from './components/imagesSource/setSelectedImageSourceValue.js'
import { setSelectedLanguageValue } from './components/language/setSelectedLanguageValue.js'
import { imageSourceSelect, checkImageSourceSelectValue } from './components/imagesSource/setSelectedImageSourceValue.js'

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showDate()
showTime()
showGreetingText()
setPlaceHolderLanguage()
changeBackground()
getQuotes()
createPlayList()
loadSong()

window.addEventListener('beforeunload', () => {
	setGreetingName()
	setCurrentLanguage()
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
	setCurrentLanguage()
	getWeather()
	showDate()
	showGreetingText()
	setPlaceHolderLanguage()
	getQuotes()
})

const eventHandlers = {
	'.main__button_prev': () => changeBackgroundOnClick('prev'),
	'.main__button_next': () => changeBackgroundOnClick('next'),
	'.language': () => rotateLanguageIcon(selectLanguageWrapper, 'language__select_open'),
	'.source': () => rotateLanguageIcon(selectSourceImagesWrapper, 'source__select_open'),
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
	closeLanguageIcon(e, 'language__select', selectLanguageWrapper, 'language__select_open')
	closeLanguageIcon(e, 'source__select', selectSourceImagesWrapper, 'source__select_open')
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

imageSourceSelect.addEventListener('change', function (e) {
	checkImageSourceSelectValue(e)
})

