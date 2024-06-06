import { languageDescriptionText } from "./languageDescriptionText"

const languageDescription = document.querySelector('.settings__language-description')

export const setLanguageDescriptionText = (lang) => languageDescription.textContent = languageDescriptionText[lang]