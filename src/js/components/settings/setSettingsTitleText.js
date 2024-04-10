import { settingTitle } from "./setSettingsActiveStyles";

const settingsTitleObj = {
	en: 'SETTINGS',
	ru: 'НАСТРОЙКИ'
}

export const setSettingsTitleText = (value) => {
	settingTitle.textContent = settingsTitleObj[value]
}