import { settingTitle } from "../setSettingsActiveStyles"
import { settingsTitleText } from "./settingsText"
import { settingsInputsText } from "./settingsInputsText"

const settingsBlocksHideControlTitles = document.querySelectorAll('.settings__blocksHideControl p')

export const setSettingsText = (lang) => {
	settingsBlocksHideControlTitles.forEach((e, i) => {
		e.textContent = settingsInputsText[lang][i]
	})
	settingTitle.textContent = settingsTitleText[lang]
}