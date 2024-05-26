import { greetingName } from "./greetingStorage";
import { setStorageGreetingName } from "./greetingStorage";
import { showGreetingPopup } from "./greetingPopup/showGreetingPopup";
const maxLength = 19;

export const checkGreetingNameLength = () => {
	if (greetingName.textContent.length >= maxLength) {
		greetingName.blur()
		greetingName.textContent = greetingName.textContent.slice(0, maxLength - 1)
		setStorageGreetingName()
		showGreetingPopup('add')
	}
}