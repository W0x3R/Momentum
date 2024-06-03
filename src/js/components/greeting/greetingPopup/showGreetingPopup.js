import { body } from "../../slider/changeImages/imageLoader"

const greetingShadow = document.querySelector('.greeting__shadow')
export const greetingPopup = document.querySelector('.greeting__popup')

export const showGreetingPopup = (value) => {
	greetingPopup.classList[value]('greeting__popup_show')
	greetingShadow.classList[value]('greeting__shadow_show')
	body.classList[value]('body_fixed')
}