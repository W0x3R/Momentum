import { getCurrentLanguage } from "../language/localStorageLanguage"
import { setPlaceholderValue } from "./setPlaceholderValue"

export const setPlaceHolderLanguage = () => {
	const currentLanguage = getCurrentLanguage()
	currentLanguage === 'en' ? setPlaceholderValue('en') : setPlaceholderValue('ru')
}