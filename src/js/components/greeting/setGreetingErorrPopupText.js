import { greetingErrorPopupText } from "./greetingErrorPopupText";

const greetingPopupMessage = document.querySelector('.greeting__popup-message')

export const setGreetingErrorPopupText = (lang) => {
	greetingPopupMessage.textContent = greetingErrorPopupText[lang]
}