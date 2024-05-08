import { weatherInput } from "./getWeather"

export const setStorageCity = () => {
	if (weatherInput.value) {
		localStorage.setItem('city', String(weatherInput.value).trim())
	}
}

export const getStorageCity = () => localStorage.getItem('city')