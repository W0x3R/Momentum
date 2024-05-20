import { settingTitle } from "../../setSettingsActiveStyles"
import { settingsTitleText } from "./settingsTitleText"

export const setSettingsTitleText = (lang) => {
	settingTitle.textContent = settingsTitleText[lang]
}