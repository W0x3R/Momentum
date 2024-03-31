import { getStorageCurrentLanguage } from "../language/localStorageLanguage"

const date = document.querySelector('.data__date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}

export const showDate = () => {
	const currentLanguage = getStorageCurrentLanguage()
	const currentDate = new Date().toLocaleDateString(currentLanguage, dateOptions)
	date.textContent = currentDate
}