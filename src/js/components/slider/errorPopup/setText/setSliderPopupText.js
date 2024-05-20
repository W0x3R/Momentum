import { popupErrorText } from "./errorPopupText"

const sliderPopupMessage = document.querySelector('.slider__popup-message')
export const setSliderPopupText = (value) => sliderPopupMessage.textContent = popupErrorText[value]

