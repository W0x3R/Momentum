import { weatherInput } from "./getWeather"
import { getStorageCity } from "./localStorageWeather"

export const setWeatherInputValue = () => weatherInput.value = getStorageCity()