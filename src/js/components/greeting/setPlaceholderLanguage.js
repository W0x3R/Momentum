import { getStorageCurrentLanguage } from "../language/localStorageLanguage"
import { setPlaceholderValue } from "./setPlaceholderValue"

export const setPlaceHolderLanguage = () => {
	const currentLanguage = getStorageCurrentLanguage()
	currentLanguage === 'en' ? setPlaceholderValue('en') : setPlaceholderValue('ru')
}