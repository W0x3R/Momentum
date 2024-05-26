const weatherIcon = document.querySelector('.weather__icon')

export const updateWeatherIconStyle = (data) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
}