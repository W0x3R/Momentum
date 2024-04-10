import { settingTitle } from "./setSettingsActive";

const settingsTitleObj = {
	en: 'SETTINGS',
	ru: 'НАСТРОЙКИ'
}

export const setSettingsTitleText = (value) => {
	settingTitle.textContent = settingsTitleObj[value]
}