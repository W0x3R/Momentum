import { settingsShowInputs } from "../checkedSettingsInputsFinder"

export const hideCheckedBlocksLoad = () => {
	Array.from(settingsShowInputs).filter(e => e.checked).map(e => document.querySelector(`.${e.getAttribute('name')}`).classList.add('settings__blocks-hide_hide'))
}