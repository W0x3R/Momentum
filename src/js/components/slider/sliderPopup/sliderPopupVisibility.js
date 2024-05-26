import { body } from "../changeImages/imageLoader"

export const sliderPopup = document.querySelector('.slider__popup')
export const popupShadow = document.querySelector('.popup__shadow')

export const showSliderPopup = (value) => {
	sliderPopup.classList[value]('slider__popup_show')
	popupShadow.classList[value]('popup__shadow-slider_show')
	body.classList[value]('body_fixed')
}