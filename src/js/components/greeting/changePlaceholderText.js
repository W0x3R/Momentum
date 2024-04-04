import { getStorageLanguage } from "../language/localStorageLanguage"
import { setPlaceholderText } from "./setPlaceholderText"

export const changePlaceholderText = () => {
	const currLang = getStorageLanguage()
	currLang === 'en' ? setPlaceholderText('en') : setPlaceholderText('ru')
}