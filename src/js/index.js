import { setDefaultCurrentLanguage, setCurrentLanguage } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceHolderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { greetingName, getGreetingName, setGreetingName } from './components/greeting/localStorageGreeting.js'
import { weatherCityInput, getWeather } from './components/weather/getWeather'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBackground, changeBackgroundOnClick, queryInput, changeQueryInput } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong, updateTime } from './components/player/updateLoadSong.js'
import { checkFlagSong } from './components/player/playSong.js'
import { audio, nextSong, prevSong, playClickedSong, volumeButton } from './components/player/switchSong.js'
import { updateProgressBar, checkClickOnProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageWrapper, selectSourceImagesWrapper, languageSelect, rotateIcon, closeIcon } from './components/transformIcons/transformIcons.js'
import { checkIsMute, setButtonValueContentLoaded, checkInputChangeVolume } from './components/player/volume.js'
import { setSelectedLanguageValue } from './components/language/setSelectedLanguageValue.js'
import { imageSourceSelect, checkImageSourceSelectValue, setSelectedSourceValue } from './components/imagesSource/setSelectedImageSourceValue.js'

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

window.addEventListener('beforeunload', () => {
	setDefaultCurrentLanguage()
	setCity()
})

greetingName.addEventListener('input', () => {
	setGreetingName()
})

window.addEventListener('load', () => {
	getGreetingName()
	getCity()
	setSelectedSourceValue()
	setSelectedLanguageValue()
	changeBackground()
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
	for (const selector in eventHandlers) {
		if (target.closest(selector)) {
			eventHandlers[selector](e)
			break
		}
	}
	closeIcon(e, 'language__select', selectLanguageWrapper, 'language__select_open')
	closeIcon(e, 'source__select', selectSourceImagesWrapper, 'source__select_open')
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

queryInput.addEventListener('change', changeQueryInput)


