import { popupErrorText } from "./errorPopupText"

const popupMessage = document.querySelector('.slider__popup-message')
export const setErrorPopupText = (value) => popupMessage.textContent = popupErrorText[value]