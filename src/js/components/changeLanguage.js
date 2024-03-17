
import { getWeather } from "./weather"
import { showGreetingText } from "./greeting/greetingMessage";
import { setPlaceHolder } from "./greeting/greetingPlaceholder";
import { showDate } from "./date/date";

let getQuotes;
import("./quotes").then(module => {
	getQuotes = module.getQuotes;
});

const selectWrapper = document.querySelector('.language')
const select = document.querySelector('.language__select')
const selectChildrenArray = Array.from(select.children)

selectWrapper.addEventListener('click', function (e) {
	this.classList.toggle('language__select_open')
})

const setCurrentLang = () => {
	localStorage.setItem('language', select.value)
}

const findItem = (lang, value) => {
	const item = selectChildrenArray.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}

const setSelectedValue = () => {
	const lang = getCurrentLang()
	if (lang === 'en') {
		findItem('ru', false)
		findItem('en', true)
	} else if (lang === 'ru') {
		findItem('en', false)
		findItem('ru', true)
	}
}

const getCurrentLang = () => localStorage.getItem('language')

select.addEventListener('change', () => {
	setCurrentLang()
	getWeather()
	setSelectedValue()
	showDate()
	showGreetingText()
	setPlaceHolder()
	getQuotes()
})

window.addEventListener('click', function (e) {
	!e.target.classList.contains('language__select') ? selectWrapper.classList.remove('language__select_open') : ''
})

export { getCurrentLang, setCurrentLang, setSelectedValue }

