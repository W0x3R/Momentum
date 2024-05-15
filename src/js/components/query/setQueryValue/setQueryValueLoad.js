import { showGreetingMessageText } from "../../greeting/setText/greetingMessage/showGreetingMessageText";
import { getStorageLanguage } from "../../language/localStorageLanguage";
import { translateGreeting } from "../../slider/translateGreeting"
import { getStorageQueryInputValueLoad } from "../../slider/localStorageSlider";
import { setQueryValue } from "./setQueryValue";

const greetingText = showGreetingMessageText().split(' ')[1].slice(0, -1);

export const setQueryValueLoad = () => {
	const queryValue = getStorageQueryInputValueLoad()
	const currLang = getStorageLanguage()
	if (queryValue) {
		setQueryValue(queryValue)
	} else {
		setQueryValue(currLang === 'ru' ? translateGreeting(greetingText) : greetingText)
	}
}