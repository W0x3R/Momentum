import { getStorageLanguage } from "../../language/languageStorage"
import { displayWeatherItems } from "../displayWeatherItems"
import { weatherError } from "../showWeatherError"
import { weatherText } from "./weatherText"

export const weatherTemperature = document.querySelector('.weather__temperature')
export const weatherTemperatureDescription = document.querySelector('.weather__description')
export const weatherWind = document.querySelector('.weather__wind')
export const weatherHumidity = document.querySelector('.weather__humidity')

export const setWeatherText = (data, currLang) => {
	displayWeatherItems('remove')
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${weatherText[currLang].wind} ${Math.round(data.wind.speed)} ${weatherText[currLang].units}`;
	weatherHumidity.textContent = `${weatherText[currLang].humidity} ${Math.round(data.main.humidity)}%`;
	weatherError.textContent = '';
}

export const setWeatherErrorText = () => {
	displayWeatherItems('add')
	const currLang = getStorageLanguage()
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	weatherError.textContent = `${weatherText[currLang].error}`;
}