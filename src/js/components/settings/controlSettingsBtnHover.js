const settingsCloseBtn = document.querySelector('.settings__close-button')

export const controlSettingsBtnHover = (value) => {
	settingsCloseBtn.classList[value]('settings__close-button_hover')
}