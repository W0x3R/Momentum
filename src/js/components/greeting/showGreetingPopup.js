import { body } from "../slider/changeImages/loadImage"
import { popupShadow } from "../slider/errorPopup/controlErrorPopupClass"

const greetingPopup = document.querySelector('.greeting__popup')

export const showGreetingPopup = (value) => {
	greetingPopup.classList[value]('greeting__popup_show')
	popupShadow.classList[value]('popup__shadow-greeting_show')
	body.classList[value]('body_fixed')
}