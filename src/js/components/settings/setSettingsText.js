import { settingTitle } from "./setSettingsActiveStyles"

const settingsShowTitles = document.querySelectorAll('.settings__show p')
const settingsTitleObj = {
	en: 'SETTINGS',
	ru: 'НАСТРОЙКИ'
}
const settingsShowObj = {
	en: ['Show', 'Player', 'Weather', 'Clock', 'Date', 'Greeting', 'Quotes'],
	ru: ['Показать', 'Плеер', 'Погода', 'Часы', 'Дата', 'Приветствие', 'Цитата']
}

export const setSettingsText = (lang) => {
	settingsShowTitles.forEach((e, i) => {
		e.textContent = settingsShowObj[lang][i]
	})
	settingTitle.textContent = settingsTitleObj[lang]
}