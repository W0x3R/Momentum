
import { showGreetingText } from "../greeting/showGreetingText";
import { getStorageLanguage } from "../language/localStorageLanguage";
import { translateGreeting } from "../slider/translateGreeting"
import { controlErrorPopupClass } from "../slider/errorPopup/controlErrorPopupClass";
import { getStorageQueryInputValueLoad, setStorageNumPicturePexels } from '../slider/localStorageSlider'
import { changePexelsImages } from "../slider/changeImages/Pexels/changePexelsImages";
import { setQueryValue } from "./setQueryValue";

export const queryWrapper = document.querySelector('.query')
export const queryInput = document.querySelector('.query__input')
const greetingText = showGreetingText().split(' ')[1].slice(0, -1);
const forbiddenSymbols = ['#', '%', '&', '+', ';']

export const setQueryValueLoad = () => {
	const queryValue = getStorageQueryInputValueLoad()
	const currLang = getStorageLanguage()
	if (queryValue) {
		setQueryValue(queryValue)
	} else {
		setQueryValue(currLang === 'ru' ? translateGreeting(greetingText) : greetingText)
	}
}

export const changeQueryInput = () => {
	const queryInputValue = String(queryInput.value.trim())
	const checkIncludeForbiddenSymbols = Array.from(queryInputValue).some(e => forbiddenSymbols.includes(e))
	if (queryInputValue === '' || checkIncludeForbiddenSymbols) {
		controlErrorPopupClass('add')
		return
	}
	setQueryValue(queryInputValue)
	queryInput.value = queryInputValue
	setStorageNumPicturePexels(0)
	changePexelsImages()
}