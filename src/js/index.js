import { getStorageGreetingName } from './components/greeting/localStorageGreeting.js'
import { setStorageCity, getStorageCity } from './components/weather/localStorageWeather.js'
import { setStorageQueryInputValueUnload, getStorageQueryInputValueLoad } from './components/slider/localStorageSlider.js'
import { changeAppText } from './components/changeAppText/changeAppText.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { callEvents } from './components/eventHandlers/callEvents.js'
import { clickEvents } from './components/eventHandlers/clickEvents.js'
import { changeEvents } from './components/eventHandlers/changeEvents.js'
import { inputEvents } from './components/eventHandlers/inputEvents.js'
import { checkSelectedImagesSrc } from './components/imagesSrc/checkSelectedImagesSrc.js'
import { changeSelectedLanguageValue } from './components/language/changeSelectedLanguageValue.js'
import { changeLanguageIcon } from './components/language/changeLanguageIcon.js'
import { createPlayList } from './components/player/createPlayList'
import { loadSong } from './components/player/loadSong.js'
import { updateSongTime } from './components/player/updateSongTime.js'
import { audio } from './components/player/playSong.js'
import { nextSong } from './components/player/switchSong.js'
import { updateProgressBar } from './components/player/updateProgressBar.js'
import { selectLanguageInner, selectImagesSrcWrapper, closeIcon } from './components/transformIcons/transformIcons.js'
import { setVolumeBtnValue } from './components/player/volume.js'
import { changeQuote } from './components/quotes/changeQuote.js'
import { changeBG } from './components/slider/changeBG.js'
import { setQueryValue } from './components/query/queryValues.js'
import { controlPopupBtnHover } from './components/slider/controlPopupBtnHover.js'
import { popup } from './components/slider/setErrorPopupClass.js'
import { setCheckedInputsLoad } from './components/settings/setCheckedInputsLoad.js'
import { hideCheckedBlocksLoad } from './components/settings/hideCheckedBlocksLoad.js'
import { callKeydownEvent } from './components/eventHandlers/keydownEvents.js'
import { checkClickOutGreetingName } from './components/greeting/checkClickOutGreeting.js'

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showDate()
showTime()
changeAppText()
changeQuote()
createPlayList()
loadSong()
changeSelectedLanguageValue()
changeLanguageIcon()
checkSelectedImagesSrc()
getStorageCity()
getStorageGreetingName()
setQueryValue()
changeBG()
setVolumeBtnValue()
getStorageQueryInputValueLoad()
setCheckedInputsLoad()
hideCheckedBlocksLoad()

window.addEventListener('beforeunload', () => {
	setStorageCity()
	setStorageQueryInputValueUnload()
})

audio.addEventListener('timeupdate', function (e) {
	updateSongTime()
	updateProgressBar(e)
})

window.addEventListener('click', function (e) {
	callEvents(e, clickEvents)
	closeIcon(e, 'language__select', selectLanguageInner, 'language__select_open')
	closeIcon(e, 'source__select', selectImagesSrcWrapper, 'source__select_open')
	checkClickOutGreetingName(e)
	console.log(e.target);
})

audio.addEventListener('ended', nextSong)
window.addEventListener('input', (e) => callEvents(e, inputEvents))
window.addEventListener('change', (e) => callEvents(e, changeEvents))
popup.addEventListener('mouseleave', () => controlPopupBtnHover('add'))
popup.addEventListener('mouseenter', () => controlPopupBtnHover('remove'))

window.addEventListener('keydown', (e) => callKeydownEvent(e)
)