const popupBtn = document.querySelector('.slider__popup-close-button')

export const controlErrorPopupBtnHover = (value) => popupBtn.classList[value]('slider__popup-close-button_hover')