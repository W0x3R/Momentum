const popupMessage = document.querySelector('.popup__message')
const popupErrorObj = {
	en: ['Nothing was found for this query. Try again.'],
	ru: ['По заданному запросу ничего не найдено. Попробуйте еще раз.']
}

export const setErrorPopupText = (value) => {
	popupMessage.textContent = popupErrorObj[value]
}