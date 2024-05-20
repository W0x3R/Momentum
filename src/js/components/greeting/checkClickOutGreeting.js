import { greetingName } from "./localStorageGreeting";
import { trimGreetingName } from "./setText/trimGreetingName";

export const checkClickOutGreetingName = (e) => {
	if (!e.target.classList.contains('greeting__name')) {
		greetingName.blur()
		trimGreetingName()
	}
}