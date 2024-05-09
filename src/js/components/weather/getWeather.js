import { getStorageLanguage } from "../language/localStorageLanguage"
import { setWeatherText, setWeatherErrorText } from "./setText/setWeatherText"
import { setWeatherIcon } from "./setWeatherStyles"

export const weatherInput = document.querySelector('.weather__input')

export const getWeather = async () => {
	try {
		const currLang = getStorageLanguage()
		const weatherCityValue = String(weatherInput.value).trim()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCityValue}&lang=${currLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		weatherInput.value = weatherCityValue
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		setWeatherIcon(data)
		setWeatherText(data, currLang)
	} catch (error) {
		setWeatherErrorText()
	}
}