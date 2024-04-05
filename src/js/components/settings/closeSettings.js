import { settingsWrapper } from "./openSettings"

export const closeSettings = () => {
	settingsWrapper.classList.remove('settings__wrapper_show')
}