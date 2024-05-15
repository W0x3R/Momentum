import { greetingName, setStorageGreetingName } from "./localStorageGreeting"
import { greetingNameText } from "./greetingNameText"


export const setGreetingNameText = (lang) => {
	const name = localStorage.getItem('name')
	if (!name
		|| greetingNameText.en === name || greetingNameText.ru === name || name === '') {
		greetingName.textContent = greetingNameText[lang]
		setStorageGreetingName()
	}
}
