import { weatherCity } from "./getWeather"
import { getWeather } from "./getWeather"

export const setCity = () => {
	if (weatherCity.value) {
		localStorage.setItem('city', weatherCity.value)
	}
}

export const getCity = () => {
	const getCity = localStorage.getItem('city')
	weatherCity.value = getCity ? getCity : 'Гомель'
	getWeather()
}