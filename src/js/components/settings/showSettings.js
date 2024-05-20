import { popupShadow } from "../slider/sliderPopup/showSliderPopup"

const settingsWrapper = document.querySelector('.settings__wrapper')

export const showSettings = (value) => {
	settingsWrapper.classList[value]('settings__wrapper_show')
	popupShadow.classList[value]('popup__shadow-settings_show')
}