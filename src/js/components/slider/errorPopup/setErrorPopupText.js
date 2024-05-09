import { popupErrorText } from "./errorPopupText"

const popupMessage = document.querySelector('.popup__message')
export const setErrorPopupText = (value) => popupMessage.textContent = popupErrorText[value]