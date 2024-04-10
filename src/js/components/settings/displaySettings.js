const settingsWrapper = document.querySelector('.settings__wrapper')

export const displaySettings = (value) => {
	settingsWrapper.classList[value]('settings__wrapper_show')
}