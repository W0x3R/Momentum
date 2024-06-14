import { greetingName, setStorageGreetingName } from "./greetingStorage";

const forbiddenNames = ['[Enter name]', '[Введите имя]']

export const clearGreetingName = () => {
	if (forbiddenNames.includes((greetingName.textContent))) {
		greetingName.textContent = ''
		setStorageGreetingName()
	}
}