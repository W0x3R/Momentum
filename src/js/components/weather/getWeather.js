import { getStorageCurrentLanguage } from "../language/localStorageLanguage"
import { updateUI, handleErrors } from "./updateWeather"

export const weatherCityInput = document.querySelector('.weather__input')

export async function getWeather() {
	try {
		const currentLang = getStorageCurrentLanguage()
		const weatherCityInputTrim = String(weatherCityInput.value).trim()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityInputTrim}&lang=${currentLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		weatherCityInput.value = weatherCityInputTrim
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		updateUI(data, currentLang);
	}
	catch (error) {
		handleErrors()
	}
}