import { getStorageCurrentLanguage } from "../language/localStorageLanguage"
import { setPlaceholderValue } from "./setPlaceholderValue"

export const setPlaceholderLanguage = () => {
	const currentLanguage = getStorageCurrentLanguage()
	currentLanguage === 'en' ? setPlaceholderValue('en') : setPlaceholderValue('ru')
}