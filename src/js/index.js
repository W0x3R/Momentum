import { setGreetingName } from './components/greeting/setText/setGreetingName.js'
import { setStorageCity } from './components/weather/localStorageWeather.js'
import { setWeatherInputValue } from './components/weather/setWeatherInputValue.js'
import { getWeather } from './components/weather/getWeather.js'
import { setStorageQueryInputValue } from './components/slider/localStorageSlider.js'
import { setQueryInputValue } from './components/query/setQueryValue/setQueryInputValue.js'
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
import { updateSongTime } from './components/player/songTime/updateSongTime.js'
import { audio } from './components/player/playbackControl/playSong.js'
import { nextSong } from './components/player/switchSong/nextSong.js'
import { updateProgressBar } from './components/player/progressBar/updateProgressBar.js'
import { setVolumeBtnValue } from './components/player/volume/setVolumeBtnValue.js'
import { setBtnStateOnVolumeValue } from './components/player/volume/setBtnStateOnVolumeValue.js'
import { changeQuote } from './components/quotes/changeQuote.js'
import { changeGithubImages } from './components/slider/changeImages/Github/changeGithubImages.js'
import { changePexelsImages } from './components/slider/changeImages/Pexels/changePexelsImages.js'
import { setQueryVariableValueLoad } from './components/query/setQueryValue/setQueryVariableValueLoad.js'
import { controlSliderPopupBtnHover } from './components/slider/sliderPopup/controlSliderPopupBtnHover.js'
import { sliderPopup } from './components/slider/sliderPopup/showSliderPopup.js'
import { setCheckedInputsLoad } from './components/settings/setCheckedInputs/setCheckedInputsLoad.js'
import { hideCheckedBlocksLoad } from './components/settings/hideCheckedBlocks/hideCheckedBlocksLoad.js'
import { callKeydownEvent } from './components/eventHandlers/keydownEvents.js'
import { checkClickOutGreetingName } from './components/greeting/checkClickOutGreeting.js'
import { greetingPopup } from './components/greeting/showGreetingPopup.js'
import { controlGreetingPopupBtnHover } from './components/greeting/controlGreetingPopupBtnHover.js'

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
setWeatherInputValue()
getWeather()
setGreetingName()
setQueryVariableValueLoad()
changeGithubImages()
changePexelsImages()
setVolumeBtnValue()
setBtnStateOnVolumeValue()
setQueryInputValue()
setCheckedInputsLoad()
hideCheckedBlocksLoad()

window.addEventListener('beforeunload', () => {
	setStorageCity()
	setStorageQueryInputValue()
})

audio.addEventListener('timeupdate', function (e) {
	updateSongTime()
	updateProgressBar(e)
})

window.addEventListener('click', function (e) {
	callEvents(e, clickEvents)
	checkClickOutGreetingName(e)
})

audio.addEventListener('ended', nextSong)
window.addEventListener('input', (e) => callEvents(e, inputEvents))
window.addEventListener('change', (e) => callEvents(e, changeEvents))
window.addEventListener('keydown', (e) => callKeydownEvent(e))
sliderPopup.addEventListener('mouseleave', () => controlSliderPopupBtnHover('add'))
sliderPopup.addEventListener('mouseenter', () => controlSliderPopupBtnHover('remove'))
greetingPopup.addEventListener('mouseleave', () => controlGreetingPopupBtnHover('add'))
greetingPopup.addEventListener('mouseenter', () => controlGreetingPopupBtnHover('remove'))