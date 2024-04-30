import { greetingName } from "./localStorageGreeting";

export const checkClickOutGreetingName = (e) => {
	if (!e.target.classList.contains('greeting__name')) {
		greetingName.blur()
	}
}