import { srcDescriptionText } from "./imagesSrcText"

const srcDescription = document.querySelector('.settings__source-description')

export const setImagesSrcText = (lang) => srcDescription.textContent = srcDescriptionText[lang]