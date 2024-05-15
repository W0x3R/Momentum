import { body } from "../changeImages/loadImage"

export const popup = document.querySelector('.popup')
export const popupShadow = document.querySelector('.popup__shadow')

export const controlErrorPopupClass = (value) => {
	popup.classList[value]('popup_show')
	popupShadow.classList[value]('popup__shadow-slider_show')
	body.classList[value]('body_fixed')
}