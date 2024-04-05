const settingsButton = document.querySelector('.settings__button')
const settingTitle = document.querySelector('.settings__title')

export const toggleSettingsActive = () => {
	settingTitle.classList.toggle('settings__title_active')
	settingsButton.classList.toggle('settings__button_active')
}