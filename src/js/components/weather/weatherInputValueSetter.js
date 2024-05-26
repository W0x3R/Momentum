import { weatherInput } from "./weatherAPI"
import { getStorageCity } from "./localStorageWeather"

export const setWeatherInputFromStorage = () => weatherInput.value = getStorageCity()