import { setCurrentLang } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceHolderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getGreetingName, setGreetingName } from './components/greeting/localStorageGreeting.js'
import { weatherCityInput, getWeather } from './components/weather/getWeather'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBg, sliderButtonPrev, sliderButtonNext, showBgOnClick } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList, playList } from './components/player/createPlayList'
import { loadSong, updateTime } from './components/player/updateLoadSong.js'
import { playButton, checkFlagSong } from './components/player/playSong.js'
import { audio, nextSong, prevSong, playClickedSong, volumeButton } from './components/player/switchSong.js'
import { progressBar, updateProgressBar } from './components/player/updateProgressBar.js'
import { select, selectWrapper, rotateLanguageIcon, closeLanguageIcon } from './components/language/transformIcon.js'
import { setSelectedValue } from './components/language/setSelectedValue.js'
import { volumeMuteButton, checkIsMute, setButtonValueContentLoaded, checkInputChangeVolume } from './components/player/volume.js'

const playButtonPrev = document.querySelector('.player__controls-prev')
const playButtonNext = document.querySelector('.player__controls-next')

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
})

weatherCityInput.addEventListener('change', getWeather)

sliderButtonPrev.addEventListener('click', () => showBgOnClick('prev'))
sliderButtonNext.addEventListener('click', () => showBgOnClick('next'))


playButton.addEventListener('click', checkFlagSong)

progressBar.addEventListener('click', function (e) {
	let x = e.pageX - progressBar.getBoundingClientRect().left
	let clickedValue = (x * progressBar.max) / progressBar.clientWidth;
	audio.currentTime = (audio.duration * clickedValue) / progressBar.max;
});

audio.addEventListener('timeupdate', function (e) {
	updateTime()
	updateProgressBar(e)
})

select.addEventListener('change', () => {
	setCurrentLang()
	getWeather()
	setSelectedValue()
	showDate()
	showGreetingText()
	setPlaceHolderLanguage()
	getQuotes()
})

selectWrapper.addEventListener('click', function () {
	rotateLanguageIcon()
})

window.addEventListener('click', function (e) {
	closeLanguageIcon(e)
})

audio.addEventListener('ended', function () {
	nextSong()
})
playButtonNext.addEventListener('click', nextSong)
playButtonPrev.addEventListener('click', prevSong)

playList.addEventListener('click', function (e) {
	playClickedSong(e)
});

volumeButton.addEventListener('input', function () {
	checkInputChangeVolume()
})

volumeMuteButton.addEventListener('click', function (e) {
	checkIsMute()
})

document.addEventListener('DOMContentLoaded', function (e) {
	setButtonValueContentLoaded()
});