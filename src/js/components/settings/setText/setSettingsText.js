import { settingTitle } from "../setSettingsActiveStyles"
import { settingsTitleText, settingsShowText } from "./settingsText"

const settingsBlocksHideControlTitles = document.querySelectorAll('.settings__blocksHideControl p')

export const setSettingsText = (lang) => {
	settingsBlocksHideControlTitles.forEach((e, i) => {
		e.textContent = settingsShowText[lang][i]
	})
	settingTitle.textContent = settingsTitleText[lang]
}