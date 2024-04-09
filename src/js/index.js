import { setStorageLanguageDefault } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { changeAppText } from './components/changeAppText/changeAppText.js'
import { getStorageGreetingName } from './components/greeting/localStorageGreeting.js'
import { setStorageCity, getStorageCity } from './components/weather/localStorageWeather.js'
import { changeBG, setQueryValue } from './components/slider/changeBG.js'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong } from './components/player/loadSong.js'
import { updateSongTime } from './components/player/updateSongTime.js'
import { audio, nextSong } from './components/player/switchSong.js'
import { updateProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageInner, selectImagesSrcWrapper, closeIcon } from './components/transformIcons/transformIcons.js'
import { setBtnValueLoad } from './components/player/volume.js'
import { changeLanguageSelectedItem } from './components/language/setSelectedLanguageValue.js'
import { changeLanguageIcon } from './components/language/changeLanguageIcon.js'
import { checkImagesSrc } from './components/imagesSrc/checkImagesSrc.js'
import { setStorageImagesSrcDefault } from './components/imagesSrc/localStorageImagesSrc.js'
import { clickEvents, inputEvents, changeEvents, callEvents } from './components/eventHandlers/eventHandlers.js'
import { popup, controlBtnHover } from './components/slider/controlErrorPopup.js'
import { setQueryInputValueBeforeUnload, getQueryInputValueLoad } from './components/slider/localStorageSlider.js'

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showDate()
showTime()
changeAppText()
getQuotes()
createPlayList()
loadSong()
changeLanguageSelectedItem()
changeLanguageIcon()
checkImagesSrc()
getStorageCity()
getStorageGreetingName()
setQueryValue()
changeBG()
setBtnValueLoad()
getQueryInputValueLoad()

window.addEventListener('beforeunload', () => {
	setStorageLanguageDefault()
	setStorageImagesSrcDefault()
	setStorageCity()
	setQueryInputValueBeforeUnload()
})

audio.addEventListener('timeupdate', function (e) {
	updateSongTime()
	updateProgressBar(e)
})

window.addEventListener('click', function (e) {
	callEvents(e, clickEvents)
	closeIcon(e, 'language__select', selectLanguageInner, 'language__select_open')
	closeIcon(e, 'source__select', selectImagesSrcWrapper, 'source__select_open')
})

audio.addEventListener('ended', nextSong)
window.addEventListener('input', (e) => callEvents(e, inputEvents))
window.addEventListener('change', (e) => callEvents(e, changeEvents))
popup.addEventListener('mouseleave', () => controlBtnHover('add'))
popup.addEventListener('mouseenter', () => controlBtnHover('remove'))