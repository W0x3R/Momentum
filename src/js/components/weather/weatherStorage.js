import { weatherInput } from "./fetchWeatherData "

export const setStorageCity = () => localStorage.setItem('city', weatherInput.value)

export const getStorageCity = () => localStorage.getItem('city') || 'Гомель'