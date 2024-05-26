import { getStorageLanguage } from "../../language/localStorageLanguage"
import { weatherError } from "../weatherErrorHandling"
import { weatherText } from "./weatherText"

const weatherTemperature = document.querySelector('.weather__temperature')
const weatherTemperatureDescription = document.querySelector('.weather__description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')

export const setWeatherText = (data, currLang) => {
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${weatherText[currLang].wind} ${Math.round(data.wind.speed)} ${weatherText[currLang].units}`;
	weatherHumidity.textContent = `${weatherText[currLang].humidity} ${Math.round(data.main.humidity)}%`;
	weatherError.textContent = '';
}

export const setWeatherErrorText = () => {
	const currLang = getStorageLanguage()
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	weatherError.textContent = `${weatherText[currLang].error}`;
}