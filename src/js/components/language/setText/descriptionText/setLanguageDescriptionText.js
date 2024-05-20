import { languageDescriptionText } from "./languageDescriptionText"

const languageDescription = document.querySelector('.language__description')

export const setLanguageDescriptionText = (lang) => {
	languageDescription.textContent = languageDescriptionText[lang]
}