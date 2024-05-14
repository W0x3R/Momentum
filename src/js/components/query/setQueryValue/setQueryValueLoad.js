import { showGreetingText } from "../../greeting/showGreetingText";
import { getStorageLanguage } from "../../language/localStorageLanguage";
import { translateGreeting } from "../../slider/translateGreeting"
import { getStorageQueryInputValueLoad } from "../../slider/localStorageSlider";
import { setQueryValue } from "./setQueryValue";

const greetingText = showGreetingText().split(' ')[1].slice(0, -1);

export const setQueryValueLoad = () => {
	const queryValue = getStorageQueryInputValueLoad()
	const currLang = getStorageLanguage()
	if (queryValue) {
		setQueryValue(queryValue)
	} else {
		setQueryValue(currLang === 'ru' ? translateGreeting(greetingText) : greetingText)
	}
}