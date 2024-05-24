import { greetingName } from "./localStorageGreeting";
import { setStorageGreetingName } from "./localStorageGreeting";
import { showGreetingPopup } from "./showGreetingPopup";
const maxLength = 17;

export const checkGreetingNameLength = () => {
	if (greetingName.textContent.length >= maxLength) {
		greetingName.blur()
		greetingName.textContent = greetingName.textContent.slice(0, maxLength)
		setStorageGreetingName()
		showGreetingPopup('add')
	}
}