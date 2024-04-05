import { settingsButton, settingTitle } from "./toggleSettingsActive";

export const closeSettingsActive = () => {
	settingTitle.classList.remove('settings__title_active')
	settingsButton.classList.remove('settings__button_active')
}