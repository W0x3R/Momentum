import { srcDescriptionText } from "./imagesSrcText"

const srcDescription = document.querySelector('.source__description')

export const setImagesSrcText = (lang) => srcDescription.textContent = srcDescriptionText[lang]