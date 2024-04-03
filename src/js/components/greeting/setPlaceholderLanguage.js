import { getStorageLanguage } from "../language/localStorageLanguage"
import { setPlaceholderValue } from "./setPlaceholderValue"

export const setPlaceholderLanguage = () => {
	const currLang = getStorageLanguage()
	currLang === 'en' ? setPlaceholderValue('en') : setPlaceholderValue('ru')
}