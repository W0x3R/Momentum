import { body } from "./changeBackground"
import { getCurrentLanguage } from "../language/localStorageLanguage"

export const popup = document.querySelector('.popup')
const popupButton = document.querySelector('.popup__button')
const popupShadow = document.querySelector('.popup__shadow')

const popupErrorObject = {
	en: ['Nothing was found for this query. Try again.'],
	ru: ['По заданному запросу ничего не найдено.Попробуйте еще раз.']
}

const controlErrorPopup = (value) => {
	const currentLanguage = getCurrentLanguage()
	popup.classList[value]('popup_show')
	popupShadow.classList[value]('popup__shadow_show')
	currentLanguage === 'ru' ? popup.textContent = popupErrorObject.ru : popup.textContent = popupErrorObject.en
	body.classList[value]('body_fixed')
}

export const showErrorPopup = () => {
	controlErrorPopup('add')
}

export const closeErrorPopup = () => {
	controlErrorPopup('remove')
}

export const controlButtonHover = (value) => {
	popupButton.classList[value]('popup__button_hover')
}