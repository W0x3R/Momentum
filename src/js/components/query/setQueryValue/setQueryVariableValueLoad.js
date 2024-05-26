import { setGreetingMessageText } from "../../greeting/setText/greetingMessage/setGreetingMessageText";
import { getStorageLanguage } from "../../language/localStorageLanguage";
import { translateGreeting } from "../../greeting/translateGreeting"
import { getStorageQueryInputValue } from "../localStorageQuery";
import { setQueryVariableValue } from "./setQueryVariableValue";

const greetingText = setGreetingMessageText().split(' ')[1].slice(0, -1);

export const setQueryVariableValueLoad = () => {
	const queryValue = getStorageQueryInputValue()
	const currLang = getStorageLanguage()
	if (queryValue) {
		setQueryVariableValue(queryValue)
	} else {
		setQueryVariableValue(currLang === 'ru' ? translateGreeting(greetingText) : greetingText)
	}
}