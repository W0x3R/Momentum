import { greetingName, setStorageGreetingName } from "./localStorageGreeting"

const greetingObj = {
	en: '[Enter name]',
	ru: '[Введите имя]'
}

export const setGreetingName = (lang) => {
	const name = localStorage.getItem('name')
	if (!name
		|| greetingObj.en === name || greetingObj.ru === name || name === '') {
		greetingName.textContent = greetingObj[lang]
		setStorageGreetingName()
	}
}
