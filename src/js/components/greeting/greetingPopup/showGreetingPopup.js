import { body } from "../../slider/changeImages/loadImage"
import { popupShadow } from "../../slider/sliderPopup/showSliderPopup"

export const greetingPopup = document.querySelector('.greeting__popup')

export const showGreetingPopup = (value) => {
	greetingPopup.classList[value]('greeting__popup_show')
	popupShadow.classList[value]('popup__shadow-greeting_show')
	body.classList[value]('body_fixed')
}