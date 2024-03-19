import { getCurrentLang } from "../language.js/localStorageLanguage"

const weatherIcon = document.querySelector('.weather__icon')
const weatherWind = document.querySelector('.weather__wind')
const weatherError = document.querySelector('.weather_error')
const weatherTemperature = document.querySelector('.weather__values-temperature')
const weatherTemperatureDescription = document.querySelector('.weather__values-description')
const weatherHumidity = document.querySelector('.weather__humidity')
const weatherTranslations = {
	en: {
		wind: 'Wind speed:',
		units: 'm/s',
		humidity: 'Humidity:',
		error: "ERROR: City wasn't found!"
	},
	ru: {
		wind: 'Скорость ветра',
		units: 'м/c',
		humidity: 'Влажность:',
		error: "Ошибка: Город не найден!"
	}
}

export const updateUI = (data, currentLang) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${weatherTranslations[currentLang].wind}: ${Math.round(data.wind.speed)} ${weatherTranslations[currentLang].units}`;
	weatherHumidity.textContent = `${weatherTranslations[currentLang].humidity} ${Math.round(data.main.humidity)}%`;
	weatherError.style.display = 'none';
	weatherError.textContent = '';
};


export const handleErrors = () => {
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	weatherError.style.display = 'block';
	weatherError.textContent = `${weatherTranslations[getCurrentLang()].error}`;
};