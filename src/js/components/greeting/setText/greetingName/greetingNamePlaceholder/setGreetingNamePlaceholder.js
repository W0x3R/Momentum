import { greetingName, setStorageGreetingName } from "../../../greetingStorage"
import { greetingNamePlaceholderText } from "./greetingNamePlaceholderText"

export const setGreetingNamePlaceholder = (lang) => {
	const name = localStorage.getItem('name')
	if (!name
		|| greetingNamePlaceholderText.en === name || greetingNamePlaceholderText.ru === name) {
		greetingName.textContent = greetingNamePlaceholderText[lang]
		setStorageGreetingName()
	}
}