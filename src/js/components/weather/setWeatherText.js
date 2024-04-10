import { getStorageLanguage } from "../language/localStorageLanguage"
import { weatherError } from "./setWeatherStyles"

const weatherTemperature = document.querySelector('.weather__temperature')
const weatherTemperatureDescription = document.querySelector('.weather__description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')
const weatherTranslations = {
	en: {
		wind: 'Wind speed:',
		units: 'm/s',
		humidity: 'Humidity:',
		error: "Error: City wasn't found!"
	},
	ru: {
		wind: 'Скорость ветра:',
		units: 'м/c',
		humidity: 'Влажность:',
		error: "Ошибка: Город не найден!"
	}
}

export const setWeatherText = (data, currLang) => {
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${weatherTranslations[currLang].wind} ${Math.round(data.wind.speed)} ${weatherTranslations[currLang].units}`;
	weatherHumidity.textContent = `${weatherTranslations[currLang].humidity} ${Math.round(data.main.humidity)}%`;
	weatherError.textContent = '';
}

export const setWeatherErrorText = () => {
	const currLang = getStorageLanguage()
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	weatherError.style.display = 'block';
	weatherError.textContent = `${weatherTranslations[currLang].error}`;
}