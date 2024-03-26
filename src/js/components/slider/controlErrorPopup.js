import { body } from "./changeBackground"

const popup = document.querySelector('.popup')
const popupButton = document.querySelector('.popup__button')
const popupShadow = document.querySelector('.popup__shadow')

const controlErrorPopup = (value) => {
	popup.classList[value]('popup_show')
	popupShadow.classList[value]('popup__shadow_show')
	body.classList[value]('body_fixed')
}

export const showErrorPopup = () => {
	controlErrorPopup('add')
}

export const closeErrorPopup = () => {
	controlErrorPopup('remove')
}

