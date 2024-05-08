const popupMessage = document.querySelector('.popup__message')
const popupErrorText = {
	en: ['Nothing was found for this query. Try again.'],
	ru: ['По заданному запросу ничего не найдено. Попробуйте еще раз.']
}

export const setErrorPopupText = (value) => {
	popupMessage.textContent = popupErrorText[value]
}