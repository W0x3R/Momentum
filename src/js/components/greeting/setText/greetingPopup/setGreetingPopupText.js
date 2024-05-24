import { greetingPopupText } from "./greetingPopupText";

const greetingPopupMessage = document.querySelector('.greeting__popup-message')

export const setGreetingPopupText = (lang) => {
	greetingPopupMessage.textContent = greetingPopupText[lang]
}