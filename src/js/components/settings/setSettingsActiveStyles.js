const settingsButton = document.querySelector('.settings__header-button')
export const settingTitle = document.querySelector('.settings__header-title')

export const setSettingsActiveStyles = (value) => {
	settingTitle.classList[value]('settings__header-title_active')
	settingsButton.classList[value]('settings__header-button_active')
}