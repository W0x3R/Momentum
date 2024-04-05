const settingsButton = document.querySelector('.settings__button')
const settingDescription = document.querySelector('.settings__button-description')

export const toggleSettingsActive = () => {
	settingDescription.classList.toggle('settings__button-description_active')
	settingsButton.classList.toggle('settings__button_active')
}