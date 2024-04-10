const settingsButton = document.querySelector('.settings__button')
export const settingTitle = document.querySelector('.settings__title')

export const setSettingsActive = (value) => {
	settingTitle.classList[value]('settings__title_active')
	settingsButton.classList[value]('settings__button_active')
}