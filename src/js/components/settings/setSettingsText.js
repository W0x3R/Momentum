import { settingTitle } from "./setSettingsActiveStyles"
import { settingsTitleText, settingsShowText } from "./settingsText"

const settingsShowTitles = document.querySelectorAll('.settings__show p')

export const setSettingsText = (lang) => {
	settingsShowTitles.forEach((e, i) => {
		e.textContent = settingsShowText[lang][i]
	})
	settingTitle.textContent = settingsTitleText[lang]
}