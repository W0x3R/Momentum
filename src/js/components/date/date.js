import { getCurrentLang } from "../changeLanguage"

const date = document.querySelector('.data__date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}

export const showDate = () => {
	const currentLang = getCurrentLang()
	const currentDate = new Date().toLocaleDateString(currentLang, dateOptions)
	date.textContent = currentDate
}

