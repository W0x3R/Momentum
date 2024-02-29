const weather = document.querySelector('.weather')
const weatherCity = document.querySelector('.weather__input')
const weatherIcon = document.querySelector('.weather__icon')
const weatherError = document.querySelector('.weather_error')
const weatherTemperature = document.querySelector('.weather__values-temperature')
const weatherTemperatureDescription = document.querySelector('.weather__values-description')
const weatherWind = document.querySelector('.weather__wind')
const weatherHumidity = document.querySelector('.weather__humidity')

async function getWeather() {
	try {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=en&appid=707403e9cd5fd98433ce849d45e3e0f2&units=metric`;
		const fetchURL = await fetch(url)
		const data = await fetchURL.json()
		weatherIcon.className = "weather__icon owf";
		weatherIcon.classList.add(`owf-${data.weather[0].id}`);
		weatherTemperature.textContent = Math.round(data.main.temp) + "°C"
		weatherTemperatureDescription.textContent = data.weather[0].description
		weatherWind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
		weatherHumidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`
		weatherError.style.display = 'none'
		weatherError.textContent = ''
	}
	catch (error) {
		weatherTemperature.textContent = ''
		weatherTemperatureDescription.textContent = ''
		weatherWind.textContent = ''
		weatherHumidity.textContent = ''
		weatherError.style.display = 'block'
		weatherError.textContent = `ERROR: City wasn't found!`
	}
}

weatherCity.addEventListener('change', getWeather)

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

