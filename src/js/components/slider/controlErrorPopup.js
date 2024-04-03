import { body } from "./changeBackground"
import { getStorageLanguage } from "../language/localStorageLanguage"

export const popup = document.querySelector('.popup')
const popupMessage = document.querySelector('.popup__message')
const popupBtn = document.querySelector('.popup__button')
const popupShadow = document.querySelector('.popup__shadow')

const popupErrorObj = {
	en: ['Nothing was found for this query. Try again.'],
	ru: ['По заданному запросу ничего не найдено. Попробуйте еще раз.']
}

const controlErrorPopup = (value) => {
	const currLang = getStorageLanguage()
	popup.classList[value]('popup_show')
	popupShadow.classList[value]('popup__shadow_show')
	currLang === 'ru' ? popupMessage.textContent = popupErrorObj.ru : popupMessage.textContent = popupErrorObj.en
	body.classList[value]('body_fixed')
}

export const showErrorPopup = () => {
	controlErrorPopup('add')
}

export const closeErrorPopup = () => {
	controlErrorPopup('remove')
}

export const controlButtonHover = (value) => {
	popupBtn.classList[value]('popup__button_hover')
}