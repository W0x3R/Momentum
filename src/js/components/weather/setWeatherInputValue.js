import { weatherInput } from "./weatherAPI"
import { getStorageCity } from "./localStorageWeather"

export const setWeatherInputValue = () => weatherInput.value = getStorageCity()