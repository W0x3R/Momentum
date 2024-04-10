const popupBtn = document.querySelector('.popup__button')

export const controlBtnHover = (value) => {
	popupBtn.classList[value]('popup__button_hover')
}