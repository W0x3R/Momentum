import { weatherCityInput } from "./getWeather"
import { getWeather } from "./getWeather"

export const setStorageCity = () => {
	if (weatherCityInput.value) {
		localStorage.setItem('city', String(weatherCityInput.value).trim())
	}
}

export const getStorageCity = () => {
	const getCity = localStorage.getItem('city')
	weatherCityInput.value = getCity ? getCity : 'Гомель'
	getWeather()
}