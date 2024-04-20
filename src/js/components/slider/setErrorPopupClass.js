import { body } from "./changeBG"

export const popup = document.querySelector('.popup')
export const popupShadow = document.querySelector('.popup__shadow')

export const setErrorPopupClass = (value) => {
	popup.classList[value]('popup_show')
	popupShadow.classList[value]('popup__shadow_show-slider')
	body.classList[value]('body_fixed')
}