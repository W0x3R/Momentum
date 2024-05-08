const popupBtn = document.querySelector('.popup__button')

export const controlErrorPopupBtnHover = (value) => {
	popupBtn.classList[value]('popup__button_hover')
}