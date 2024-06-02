import { setGreetingNameLoad } from './components/greeting/setText/greetingName/setGreetingNameLoad.js'
import { setStorageCity } from './components/weather/weatherStorage.js'
import { setWeatherInputFromStorage } from './components/weather/setWeatherInputFromStorage.js'
import { fetchAndDisplayWeather } from './components/weather/fetchWeatherData .js'
import { setStorageQueryInputValue } from './components/query/storageQuery.js'
import { setQueryInputValue } from './components/query/setQueryValue/setQueryInputValue.js'
import { changeAppText } from './components/changeAppText/changeAppText.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { callEvents } from './components/eventHandlers/callEvents/callEvents.js'
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
import { setVolumeValueLoad } from './components/player/volume/setVolumeValueLoad.js'
import { changeQuote } from './components/quotes/changeQuote.js'
import { changeGithubImages } from './components/slider/changeImages/Github/githubImageChanger.js'
import { changePexelsImages } from './components/slider/changeImages/Pexels/pexelsImageChanger.js'
import { setQueryVariableValueLoad } from './components/query/setQueryValue/setQueryVariableValueLoad.js'
import { controlSliderPopupBtnHover } from './components/slider/sliderPopup/sliderPopupBtnHover.js'
import { sliderPopup } from './components/slider/sliderPopup/sliderPopupVisibility.js'
import { loadSettingsCheckedInputs } from './components/settings/settingsCheckedInputs/loadSettingsCheckedInputs.js'
import { hideCheckedBlocksLoad } from './components/settings/hideCheckedBlocks/checkedBlocksLoader.js'
import { callKeydownEvent } from './components/eventHandlers/callEvents/callKeydownEvent.js'
import { checkClickOutGreetingName } from './components/greeting/checkClickOutGreeting.js'
import { greetingPopup } from './components/greeting/greetingPopup/showGreetingPopup.js'
import { controlGreetingPopupBtnHover } from './components/greeting/greetingPopup/controlGreetingPopupBtnHover.js'
import { checkIsMuteValueLoad } from './components/player/volume/checkIsMuteValueLoad.js'
import { settingsWrapper } from './components/settings/settingsVisibility.js'
import { controlSettingsBtnHover } from './components/settings/controlSettingsBtnHover.js'

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
setWeatherInputFromStorage()
fetchAndDisplayWeather()
setGreetingNameLoad()
setQueryVariableValueLoad()
changeGithubImages()
changePexelsImages()
setVolumeValueLoad()
setQueryInputValue()
loadSettingsCheckedInputs()
hideCheckedBlocksLoad()
checkIsMuteValueLoad()

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
settingsWrapper.addEventListener('mouseleave', () => controlSettingsBtnHover('add'))
settingsWrapper.addEventListener('mouseenter', () => controlSettingsBtnHover('remove'))