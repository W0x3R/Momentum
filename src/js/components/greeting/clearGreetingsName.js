import { greetingName, setStorageGreetingName } from "./greetingStorage";

const forbiddenNames = ['[Enter name]', '[Введите имя]']

export const clearGreetingsName = () => {
	if (forbiddenNames.includes((greetingName.textContent))) {
		greetingName.textContent = ''
		setStorageGreetingName()
	}
}