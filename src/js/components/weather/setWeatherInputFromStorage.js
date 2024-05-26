import { weatherInput } from "./fetchWeatherData "
import { getStorageCity } from "./weatherStorage"

export const setWeatherInputFromStorage = () => weatherInput.value = getStorageCity()