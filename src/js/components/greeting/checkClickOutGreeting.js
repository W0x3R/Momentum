import { greetingName } from "./localStorageGreeting";
import { setGreetingNameTrim } from "./setText/greetingName/setGreetingNameTrim";

export const checkClickOutGreetingName = (e) => {
	if (!e.target.classList.contains('greeting__name')) {
		greetingName.blur()
		setGreetingNameTrim()
	}
}