import { setDefaultCurrentLanguage } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceHolderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getGreetingName } from './components/greeting/localStorageGreeting.js'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBackground } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong, updateTime } from './components/player/updateLoadSong.js'
import { audio, nextSong } from './components/player/switchSong.js'
import { updateProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageWrapper, selectSourceImagesWrapper, closeIcon } from './components/transformIcons/transformIcons.js'
import { setButtonValueContentLoaded } from './components/player/volume.js'
import { setSelectedLanguageValue } from './components/language/setSelectedLanguageValue.js'
import { setSelectedSourceValue } from './components/imagesSource/setSelectedImageSourceValue.js'
import { setImagesSourceDefault } from './components/imagesSource/localStorageImageSource.js'
import { eventHandlersClick, eventHandlersInput, eventHandlersChange, callEvents } from './components/eventHandlers/eventHandlers.js'
import { popup, popupButton } from './components/slider/controlErrorPopup.js'

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

window.addEventListener('click', function (e) {
	callEvents(e, eventHandlersClick)
	closeIcon(e, 'language__select', selectLanguageWrapper, 'language__select_open')
	closeIcon(e, 'source__select', selectSourceImagesWrapper, 'source__select_open')
})

audio.addEventListener('ended', nextSong)

window.addEventListener('input', function (e) {
	callEvents(e, eventHandlersInput)
})

window.addEventListener('change', function (e) {
	callEvents(e, eventHandlersChange)
})

popup.addEventListener('mouseleave', function (e) {
	popupButton.classList.add('popup__button_hover')
})

popup.addEventListener('mouseenter', function (e) {
	popupButton.classList.remove('popup__button_hover')
})