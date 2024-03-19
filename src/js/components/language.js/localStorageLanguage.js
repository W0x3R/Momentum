import { select } from "./transformIcon"

export const getCurrentLang = () => localStorage.getItem('language')

export const setCurrentLang = () => {
	localStorage.setItem('language', select.value)
}