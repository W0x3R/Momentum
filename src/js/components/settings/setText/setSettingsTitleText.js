import { settingTitle } from "../setSettingsActiveStyles"
import { settingsTitleText } from "./settingsText"

export const setSettingsTitleText = (lang) => {
	settingTitle.textContent = settingsTitleText[lang]
}