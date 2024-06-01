import { sliderPopupText } from "./sliderPopupText"

const sliderPopupMessage = document.querySelector('.slider__popup-message')

export const setSliderPopupText = (lang) => sliderPopupMessage.innerHTML = sliderPopupText[lang]