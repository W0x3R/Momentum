import { settingsShowInputs } from "./localStorageSettingsShow"

export const hideCheckedBlocksLoad = () => {
	Array.from(settingsShowInputs).filter(e => e.checked).map(e => document.querySelector(`.${e.getAttribute('name')}`).classList.add('settings__show_hide'))
}