import { weatherInput } from "./weatherAPI"
import { getStorageCity } from "./weatherStorage"

export const setWeatherInputFromStorage = () => weatherInput.value = getStorageCity()