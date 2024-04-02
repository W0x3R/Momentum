import { setStorageCurrentLanguageDefault } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceholderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getStorageGreetingName } from './components/greeting/localStorageGreeting.js'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBackground, setQueryValue } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong } from './components/player/loadSong.js'
import { updateSongTime } from './components/player/updateSongTime.js'
import { audio, nextSong } from './components/player/switchSong.js'
import { updateProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageWrapper, selectSourceImagesWrapper, closeIcon } from './components/transformIcons/transformIcons.js'
import { setButtonValueContentLoaded } from './components/player/volume.js'
import { changeLanguageSelectedItem } from './components/language/setSelectedLanguageValue.js'
import { changeLanguageSelectIcon } from './components/language/changeLanguageSelectIcon.js'
import { changeLanguageSelectText } from './components/language/changeLanguageSelectText.js'
import { checkImagesSource } from './components/imagesSource/checkImagesSource.js'
import { setStorageImagesSourceDefault } from './components/imagesSource/localStorageImagesSource.js'
import { clickEvents, inputEvents, changeEvents, callEvents } from './components/eventHandlers/eventHandlers.js'
import { popup, controlButtonHover } from './components/slider/controlErrorPopup.js'
import { setQueryInputValueBeforeUnload, getQueryInputValueLoad } from './components/slider/localStorageSlider.js'

setInterval(() => {
	showTime()
	showDate()
}, 1000)


showDate()
showTime()
showGreetingText()
setPlaceholderLanguage()
getQuotes()
createPlayList()
loadSong()
changeLanguageSelectedItem()
changeLanguageSelectIcon()
checkImagesSource()
getCity()
getStorageGreetingName()
setQueryValue()
changeBackground()
setButtonValueContentLoaded()
getQueryInputValueLoad()
changeLanguageSelectText()


window.addEventListener('beforeunload', () => {
	setStorageCurrentLanguageDefault()
	setStorageImagesSourceDefault()
	setCity()
	setQueryInputValueBeforeUnload()
})

audio.addEventListener('timeupdate', function (e) {
	updateSongTime()
	updateProgressBar(e)
})

window.addEventListener('click', function (e) {
	callEvents(e, clickEvents)
	closeIcon(e, 'language__select', selectLanguageWrapper, 'language__select_open')
	closeIcon(e, 'source__select', selectSourceImagesWrapper, 'source__select_open')
})

audio.addEventListener('ended', nextSong)

window.addEventListener('input', (e) => callEvents(e, inputEvents))
window.addEventListener('change', (e) => callEvents(e, changeEvents))

popup.addEventListener('mouseleave', () => controlButtonHover('add'))
popup.addEventListener('mouseenter', () => controlButtonHover('remove'))