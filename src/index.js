import './style.scss'
import { setGreetingNameLoad } from './js/components/greeting/setText/greetingName/setGreetingNameLoad.js'
import { setStorageCity } from './js/components/weather/weatherStorage.js'
import { setWeatherInputFromStorage } from './js/components/weather/setWeatherInputFromStorage.js'
import { fetchAndDisplayWeather } from './js/components/weather/fetchWeatherData .js'
import { setStorageQueryInputValue } from './js/components/query/storageQuery.js'
import { setQueryInputValue } from './js/components/query/setQueryValue/setQueryInputValue.js'
import { changeAppText } from './js/components/changeAppText/changeAppText.js'
import { showTime } from './js/components/date/time'
import { showDate } from './js/components/date/date'
import { callEvents } from './js/components/eventHandlers/callEvents/callEvents.js'
import { clickEvents } from './js/components/eventHandlers/clickEvents.js'
import { changeEvents } from './js/components/eventHandlers/changeEvents.js'
import { inputEvents } from './js/components/eventHandlers/inputEvents.js'
import { checkSelectedImagesSrc } from './js/components/imagesSrc/checkSelectedImagesSrc.js'
import { changeSelectedLanguageValue } from './js/components/language/changeSelectedLanguageValue.js'
import { changeLanguageIcon } from './js/components/language/changeLanguageIcon.js'
import { createPlayList } from './js/components/player/createPlayList'
import { loadSong } from './js/components/player/loadSong.js'
import { updateSongTime } from './js/components/player/songTime/updateSongTime.js'
import { audio } from './js/components/player/playbackControl/playSong.js'
import { nextSong } from './js/components/player/switchSong/nextSong.js'
import { updateProgressInput } from './js/components/player/progressBar/updateProgressBar.js'
import { setVolumeValueLoad } from './js/components/player/volume/setVolumeValueLoad.js'
import { changeQuote } from './js/components/quotes/changeQuote.js'
import { changeGithubImages } from './js/components/slider/changeImages/Github/githubImageChanger.js'
import { changePexelsImages } from './js/components/slider/changeImages/Pexels/pexelsImageChanger.js'
import { setQueryVariableValueLoad } from './js/components/query/setQueryValue/setQueryVariableValueLoad.js'
import { controlSliderPopupBtnHover } from './js/components/slider/sliderPopup/sliderPopupBtnHover.js'
import { sliderPopup } from './js/components/slider/sliderPopup/sliderPopupVisibility.js'
import { loadSettingsCheckedInputs } from './js/components/settings/settingsCheckedInputs/loadSettingsCheckedInputs.js'
import { hideCheckedBlocksLoad } from './js/components/settings/hideCheckedBlocks/checkedBlocksLoader.js'
import { callKeydownEvent } from './js/components/eventHandlers/callEvents/callKeydownEvent.js'
import { checkClickOutGreetingName } from './js/components/greeting/checkClickOutGreeting.js'
import { greetingPopup } from './js/components/greeting/greetingPopup/showGreetingPopup.js'
import { controlGreetingPopupBtnHover } from './js/components/greeting/greetingPopup/controlGreetingPopupBtnHover.js'
import { checkIsMuteValueLoad } from './js/components/player/volume/checkIsMuteValueLoad.js'
import { settingsMenu } from './js/components/settings/settingsVisibility.js'
import { controlSettingsBtnHover } from './js/components/settings/controlSettingsBtnHover.js'
import { setProgressDisabledLoad } from './js/components/player/setProgressDisabledLoad.js'

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
setProgressDisabledLoad()
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
	updateProgressInput(e)
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
settingsMenu.addEventListener('mouseleave', () => controlSettingsBtnHover('add'))
settingsMenu.addEventListener('mouseenter', () => controlSettingsBtnHover('remove'))