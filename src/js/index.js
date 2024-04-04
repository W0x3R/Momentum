import { setStorageLanguageDefault } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreeting } from './components/greeting/showGreeting.js'
import { setPlaceholderLanguage } from './components/greeting/setPlaceholderLanguage.js'
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
import { changeLanguageDescriptionText } from './components/language/setLanguageText.js'
import { setBtnValueLoad } from './components/player/volume.js'
import { changeLanguageSelectedItem } from './components/language/setSelectedLanguageValue.js'
import { changeLanguageIcon } from './components/language/changeLanguageIcon.js'
import { changeLanguageText } from './components/language/changeLanguageText.js'
import { checkImagesSrc } from './components/imagesSrc/checkImagesSrc.js'
import { setStorageImagesSrcDefault } from './components/imagesSrc/localStorageImagesSrc.js'
import { changeSrcDescriptionText } from './components/imagesSrc/setImagesSrcText.js'
import { clickEvents, inputEvents, changeEvents, callEvents } from './components/eventHandlers/eventHandlers.js'
import { popup, controlBtnHover } from './components/slider/controlErrorPopup.js'
import { setQueryInputValueBeforeUnload, getQueryInputValueLoad } from './components/slider/localStorageSlider.js'
import { changeQueryLabelText } from './components/query/setQueryLabelText.js'


setInterval(() => {
	showTime()
	showDate()
}, 1000)

showDate()
showTime()
showGreeting()
setPlaceholderLanguage()
getQuotes()
createPlayList()
loadSong()
changeLanguageSelectedItem()
changeLanguageIcon()
changeLanguageDescriptionText()
checkImagesSrc()
changeSrcDescriptionText()
getStorageCity()
getStorageGreetingName()
setQueryValue()
changeBG()
setBtnValueLoad()
getQueryInputValueLoad()
changeLanguageText()
changeQueryLabelText()

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