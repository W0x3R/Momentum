import { getCurrentLang, setSelectedValue } from "./changeLanguage"

const weatherCity = document.querySelector('.weather__input')
const weatherIcon = document.querySelector('.weather__icon')
const weatherError = document.querySelector('.weather_error')
const weatherTemperature = document.querySelector('.weather__values-temperature')
const weatherTemperatureDescription = document.querySelector('.weather__values-description')
const weatherWind = document.querySelector('.weather__wind')
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

const updateUI = (data, currentLang) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	weatherTemperature.textContent = Math.round(data.main.temp) + "°C";
	weatherTemperatureDescription.textContent = data.weather[0].description.slice(0, 1).toUpperCase() + data.weather[0].description.slice(1);
	weatherWind.textContent = `${weatherTranslations[currentLang].wind}: ${Math.round(data.wind.speed)} ${weatherTranslations[currentLang].units}`;
	weatherHumidity.textContent = `${weatherTranslations[currentLang].humidity} ${Math.round(data.main.humidity)}%`;
	weatherError.style.display = 'none';
	weatherError.textContent = '';
};

const handleErrors = (error) => {
	weatherTemperature.textContent = '';
	weatherTemperatureDescription.textContent = '';
	weatherWind.textContent = '';
	weatherHumidity.textContent = '';
	weatherError.style.display = 'block';
	weatherError.textContent = `${weatherTranslations[getCurrentLang()].error}`;
};

async function getWeather() {
	try {
		const currentLang = getCurrentLang()
		if (!currentLang) {
			localStorage.setItem('language', 'en')
		}
		setSelectedValue()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=${currentLang}&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		updateUI(data, currentLang);
	}
	catch (error) {
		handleErrors(error)
	}
}

weatherCity.addEventListener('change', () => {
	getWeather()
})

const setCity = () => {
	if (weatherCity.value) {
		localStorage.setItem('city', weatherCity.value)
	}
}

window.addEventListener('beforeunload', setCity)

const getCity = () => {
	const getCity = localStorage.getItem('city')
	weatherCity.value = getCity ? getCity : 'Гомель'
	getWeather()
}

window.addEventListener('load', getCity)

export { getWeather }