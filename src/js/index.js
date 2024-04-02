import { setStorageDefaultCurrentLanguage } from './components/language/localStorageLanguage.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { showGreetingText } from './components/greeting/showGreetingMessage.js'
import { setPlaceholderLanguage } from './components/greeting/setPlaceholderLanguage.js'
import { getStorageGreetingName } from './components/greeting/localStorageGreeting.js'
import { setCity, getCity } from './components/weather/localStorageWeather.js'
import { changeBackground, setQueryValue } from './components/slider/changeBackground'
import { getQuotes } from './components/quotes/getQuotes.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong, updateTime } from './components/player/updateLoadSong.js'
import { audio, nextSong } from './components/player/switchSong.js'
import { updateProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageWrapper, selectSourceImagesWrapper, closeIcon } from './components/transformIcons/transformIcons.js'
import { setButtonValueContentLoaded } from './components/player/volume.js'
import { setSelectedLanguageValue, changeSelectIcon } from './components/language/setSelectedLanguageValue.js'
import { changeLanguageSelectChildrenText } from './components/language/languageSelectChildrenText.js'
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
setSelectedLanguageValue()
changeSelectIcon()
checkImagesSource()
getCity()
getStorageGreetingName()
setQueryValue()
changeBackground()
setButtonValueContentLoaded()
getQueryInputValueLoad()
changeLanguageSelectChildrenText()


window.addEventListener('beforeunload', () => {
	setStorageDefaultCurrentLanguage()
	setStorageImagesSourceDefault()
	setCity()
	setQueryInputValueBeforeUnload()
})

audio.addEventListener('timeupdate', function (e) {
	updateTime()
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