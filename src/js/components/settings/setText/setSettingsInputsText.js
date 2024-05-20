import { settingsInputsText } from "./settingsInputsText"

const settingsBlocksHideControlTitles = document.querySelectorAll('.settings__blocksHideControl p')

export const setSettingsInputsText = (lang) => {
	settingsBlocksHideControlTitles.forEach((e, i) => {
		e.textContent = settingsInputsText[lang][i]
	})
}