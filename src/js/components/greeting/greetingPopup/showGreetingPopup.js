import { body } from "../../slider/changeImages/imageLoader"
import { popupShadow } from "../../slider/sliderPopup/sliderPopupVisibility"

export const greetingPopup = document.querySelector('.greeting__popup')

export const showGreetingPopup = (value) => {
	greetingPopup.classList[value]('greeting__popup_show')
	popupShadow.classList[value]('popup__shadow-greeting_show')
	body.classList[value]('body_fixed')
}