import { body } from "../slider/changeImages/imageLoader"

const settingsShadow = document.querySelector('.settings__shadow')
export const settingsMenu = document.querySelector('.settings__menu')

export const showSettings = (value) => {
	settingsMenu.classList[value]('settings__menu_show')
	settingsShadow.classList[value]('settings__shadow_show')
	body.classList[value]('body_fixed')
}
