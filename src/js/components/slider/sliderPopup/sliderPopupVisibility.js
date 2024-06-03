import { body } from "../changeImages/imageLoader"

export const sliderPopup = document.querySelector('.slider__popup')
const sliderShadow = document.querySelector('.slider__shadow')

export const showSliderPopup = (value) => {
	sliderPopup.classList[value]('slider__popup_show')
	sliderShadow.classList[value]('slider__shadow_show')
	body.classList[value]('body_fixed')
}