const popupBtn = document.querySelector('.popup__button')

export const controlPopupBtnHover = (value) => {
	popupBtn.classList[value]('popup__button_hover')
}