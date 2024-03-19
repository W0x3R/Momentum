import { weatherCityInput } from "./getWeather"
import { getWeather } from "./getWeather"

export const setCity = () => {
	if (weatherCityInput.value) {
		localStorage.setItem('city', weatherCityInput.value)
	}
}

export const getCity = () => {
	const getCity = localStorage.getItem('city')
	weatherCityInput.value = getCity ? getCity : 'Гомель'
	getWeather()
}