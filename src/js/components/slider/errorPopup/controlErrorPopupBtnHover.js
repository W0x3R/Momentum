const popupBtn = document.querySelector('.popup__close-button')

export const controlErrorPopupBtnHover = (value) => popupBtn.classList[value]('popup__close-button_hover')