import { greetingName } from "./localStorageGreeting";
import { setStorageGreetingName } from "./localStorageGreeting";

const forbiddenName = ['[Enter name]', '[Введите имя]']

export const clearGreetingsName = () => {
	if (forbiddenName.includes((greetingName.textContent))) {
		greetingName.textContent = ''
		setStorageGreetingName()
	}
}