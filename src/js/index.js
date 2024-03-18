import { showTime } from './components/date/time'
import { showDate } from './components/date/date'

setInterval(() => {
	showTime()
	showDate()
}, 1000)

showDate()
showTime()

import { showGreetingText } from './components/greeting/greetingMessage'
import { setPlaceHolder } from './components/greeting/greetingPlaceholder'
import { getGreetingName, setGreetingName } from './components/greeting/greetingName'
import { setCurrentLang } from './components/changeLanguage'
showGreetingText()
setPlaceHolder()

window.addEventListener('beforeunload', () => {
	setGreetingName()
	setCurrentLang()
})

window.addEventListener('load', getGreetingName)

import { weatherCity } from './components/weather/getWeather'
import { getWeather } from './components/weather/getWeather'
import { setCity, getCity } from './components/weather/weatherCity'

weatherCity.addEventListener('change', () => {
	getWeather()
})

window.addEventListener('beforeunload', setCity)

window.addEventListener('load', getCity)
import { changeBg } from './components/slider/changeBackground'
import { sliderButtonPrev, sliderButtonNext, showBgOnClick } from './components/slider/changeBackground'
changeBg()

sliderButtonPrev.addEventListener('click', () => showBgOnClick('prev'))
sliderButtonNext.addEventListener('click', () => showBgOnClick('next'))


import { getQuotes } from './components/quotes/getQuote'
getQuotes()


import * as player from './components/player'
import * as language from './components/changeLanguage'
