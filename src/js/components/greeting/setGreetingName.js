import { greetingName, setStorageGreetingName } from "./localStorageGreeting"

const greetingNameText = {
	en: '[Enter name]',
	ru: '[Введите имя]'
}

export const setGreetingNameText = (lang) => {
	const name = localStorage.getItem('name')
	if (!name
		|| greetingNameText.en === name || greetingNameText.ru === name || name === '') {
		greetingName.textContent = greetingNameText[lang]
		setStorageGreetingName()
	}
}
