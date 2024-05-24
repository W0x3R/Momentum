import { getStorageLanguage } from "../../../language/localStorageLanguage"
import { greetingMessageText } from "./greetingMessageText"

const greetingText = document.querySelector('.greeting__text')

export const setGreetingMessageText = () => {
	const currLang = getStorageLanguage()
	const currHour = new Date().getHours();
	const greeting = greetingMessageText[currLang][Math.floor(currHour / 6)]
	greetingText.textContent = greeting
	return greeting
}