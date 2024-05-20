import { showGreetingMessageText } from "../../greeting/setText/greetingMessage/showGreetingMessageText";
import { getStorageLanguage } from "../../language/localStorageLanguage";
import { translateGreeting } from "../../slider/translateGreeting"
import { getStorageQueryInputValue } from "../../slider/localStorageSlider";
import { setQueryVariableValue } from "./setQueryVariableValue";

const greetingText = showGreetingMessageText().split(' ')[1].slice(0, -1);

export const setQueryVariableValueLoad = () => {
	const queryValue = getStorageQueryInputValue()
	const currLang = getStorageLanguage()
	if (queryValue) {
		setQueryVariableValue(queryValue)
	} else {
		setQueryVariableValue(currLang === 'ru' ? translateGreeting(greetingText) : greetingText)
	}
}