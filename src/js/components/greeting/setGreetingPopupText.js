import { greetingErrorPopupText } from "./greetingErrorPopupText";

const greetingPopupMessage = document.querySelector('.greeting__popup-message')

export const setGreetingPopupText = (lang) => {
	greetingPopupMessage.textContent = greetingErrorPopupText[lang]
}