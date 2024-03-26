import { body } from "./changeBackground"

const popup = document.querySelector('.popup')
const popupShadow = document.querySelector('.popup__shadow')

export const showErrorPopup = () => {
	popup.classList.add('popup_show')
	popupShadow.classList.add('popup__shadow_show')
	body.classList.add('body_fixed')
}