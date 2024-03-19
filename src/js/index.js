import { setCurrentLang } from './components/language.js/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceHolderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getGreetingName, setGreetingName } from './components/greeting/localStorageGreeting.js'
import { weatherCityInput, getWeather } from './components/weather/getWeather'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBg, sliderButtonPrev, sliderButtonNext, showBgOnClick } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong } from './components/player/updateLoadSong.js'
import { playButton, checkFlagSong } from './components/player/playSong.js'
import { audio } from './components/player/switchSong.js'
import { progressBar, updateProgressBar } from './components/player/updateProgressBar.js'
import { updateTime } from './components/player/updateLoadSong.js'
import { select, selectWrapper } from './components/language.js/transformIcon.js'
import { setSelectedValue } from './components/language.js/setSelectedValue.js'


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

import './components/player/volume.js'
import './components/player/switchSong.js'

