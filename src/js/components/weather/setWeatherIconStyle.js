const weatherIcon = document.querySelector('.weather__icon')

export const setWeatherIconStyle = (data) => {
	weatherIcon.className = "weather__icon owf";
	weatherIcon.classList.add(`owf-${data.weather[0].id}`);
}