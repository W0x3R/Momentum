import { body } from "../slider/changeImages/imageLoader"

const settingsShadow = document.querySelector('.settings__shadow')

export const settingsWrapper = document.querySelector('.settings__wrapper')

export const showSettings = (value) => {
	settingsWrapper.classList[value]('settings__wrapper_show')
	settingsShadow.classList[value]('settings__shadow_show')
	body.classList[value]('body_fixed')
}
