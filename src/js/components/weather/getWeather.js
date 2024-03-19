import { getCurrentLang } from "../language/localStorageLanguage"
import { setSelectedValue } from "../language/setSelectedValue"
import { updateUI, handleErrors } from "./updateWeather"

export const weatherCityInput = document.querySelector('.weather__input')

export async function getWeather() {
	try {
		const currentLang = getCurrentLang()
		if (!currentLang) {
			localStorage.setItem('language', 'en')
		}
		setSelectedValue()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityInput.value}&lang=${currentLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		updateUI(data, currentLang);
	}
	catch (error) {
		handleErrors()
	}
}