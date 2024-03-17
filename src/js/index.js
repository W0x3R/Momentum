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


import * as weather from './components/weather'
import * as slider from './components/slider'
import * as quotes from './components/quotes'
import * as player from './components/player'
import * as language from './components/changeLanguage'
