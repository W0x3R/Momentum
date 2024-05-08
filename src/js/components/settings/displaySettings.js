import { popupShadow } from "../slider/controlErrorPopupClass"

const settingsWrapper = document.querySelector('.settings__wrapper')

export const displaySettings = (value) => {
	settingsWrapper.classList[value]('settings__wrapper_show')
	popupShadow.classList[value]('popup__shadow_show-settings')
}