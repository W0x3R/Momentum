import { getStorageLanguage } from "../language/localStorageLanguage"
import { setWeatherText } from "./setWeatherText"
import { setWeatherStyles } from "./setWeatherStyles"
import { setWeatherErrorText } from "./setWeatherText"

export const weatherCityInput = document.querySelector('.weather__input')

export async function getWeather() {
	try {
		const currLang = getStorageLanguage()
		const weatherCityValue = String(weatherCityInput.value).trim()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityValue}&lang=${currLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		weatherCityInput.value = weatherCityValue
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		setWeatherText(data, currLang)
		setWeatherStyles(data)
	}
	catch (error) {
		setWeatherErrorText()
	}
}