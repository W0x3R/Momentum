import { weatherTemperature, weatherTemperatureDescription, weatherWind, weatherHumidity } from "./setText/setWeatherText"
import { weatherIcon } from "./updateWeatherIconStyle"

export const displayWeatherItems = (value) => {
	const weatherItems = [weatherTemperature, weatherTemperatureDescription, weatherWind, weatherHumidity, weatherIcon]
	weatherItems.forEach(e => e.classList[value]('weather__items_hide'))
} 