import { weatherInput } from "./getWeather"
import { getStorageCity } from "./localStorageWeather"

export const setWeatherInputValue = () => {
	const getCity = getStorageCity()
	weatherInput.value = getCity ? getCity : 'Гомель'
}