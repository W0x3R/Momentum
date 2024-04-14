import { getStorageGreetingName } from './components/greeting/localStorageGreeting.js'
import { setStorageCity, getStorageCity } from './components/weather/localStorageWeather.js'
import { setQueryInputValueBeforeUnload, getQueryInputValueLoad } from './components/slider/localStorageSlider.js'
import { changeAppText } from './components/changeAppText/changeAppText.js'
import { showTime } from './components/date/time'
import { showDate } from './components/date/date'
import { clickEvents, inputEvents, changeEvents, callEvents } from './components/eventHandlers/eventHandlers.js'
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
import { changeBG, setQueryValue } from './components/slider/changeBG.js'
import { controlPopupBtnHover } from './components/slider/controlPopupBtnHover.js'
import { popup } from './components/slider/setErrorPopupClass.js'

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
getQueryInputValueLoad()

window.addEventListener('beforeunload', () => {
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
popup.addEventListener('mouseleave', () => controlPopupBtnHover('add'))
popup.addEventListener('mouseenter', () => controlPopupBtnHover('remove'))


const settingsShow = document.querySelector('.settings__show')
const settingsShowInputs = document.querySelectorAll('.settings__show input')

const indexOfCheckedInputs = Array.from(settingsShowInputs).map((e, i) => e.checked ? i : null).filter(e => e !== null)

// if (!(JSON.parse(localStorage.getItem('indexOfCheckedInputs')))) {
// 	localStorage.setItem('indexOfCheckedInputs', JSON.stringify(indexOfCheckedInputs))
// }

settingsShow.addEventListener('click', (e) => {
	if (e.target.classList.contains('settings__show-label')) {
		if (e.target.nextElementSibling.checked === true) {
			e.target.nextElementSibling.checked = false
		}
		else {
			e.target.nextElementSibling.checked = true
		}
	}
	if (!e.target.classList.contains('settings__show-title') && !e.target.classList.contains('settings__show') && !e.target.classList.contains('settings__show-inner')) {
		const dataShow = e.target.closest('[data-show]').dataset.show
		document.querySelector(`.${dataShow}`).classList.toggle('settings__show_hide')
	}
	const indexOfCheckedInputs = Array.from(settingsShowInputs).map((e, i) => e.checked ? i : null).filter(e => e !== null)
	localStorage.setItem('indexOfCheckedInputs', JSON.stringify(indexOfCheckedInputs))
})

for (let i = 0; i < JSON.parse(localStorage.getItem('indexOfCheckedInputs')).length; i++) {
	settingsShowInputs[(JSON.parse(localStorage.getItem('indexOfCheckedInputs'))[i])].checked = true;
}

const r = Array.from(settingsShowInputs).filter(e => e.checked)
r.map(e => document.querySelector(`.${e.getAttribute('name')}`).classList.add('settings__show_hide'))