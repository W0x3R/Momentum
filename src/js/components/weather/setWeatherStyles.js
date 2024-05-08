const weatherIcon = document.querySelector('.weather__icon')
export const weatherError = document.querySelector('.weather_error')

export const setWeatherIcon = (data) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
	weatherError.style.display = 'none';
}