import { getStorageLanguage } from "../language/languageStorage"

const date = document.querySelector('.date__date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}

export const showDate = () => {
	const currLang = getStorageLanguage()
	const currDate = new Date().toLocaleDateString(currLang, dateOptions)
	date.textContent = currDate
}