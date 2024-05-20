import { sliderPopupText } from "./sliderPopupText"

const sliderPopupMessage = document.querySelector('.slider__popup-message')
export const setSliderPopupText = (value) => sliderPopupMessage.textContent = sliderPopupText[value]

