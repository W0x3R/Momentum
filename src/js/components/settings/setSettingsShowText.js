const settingsShowTitles = document.querySelectorAll('.settings__show p')

const settingsShowObj = {
	en: ['Show', 'Player', 'Weather', 'Clock', 'Date', 'Greeting', 'Quotes'],
	ru: ['Показать', 'Плеер', 'Погода', 'Часы', 'Дата', 'Приветствие', 'Цитата']
}

export const setSettingsShowText = (lang) => {
	settingsShowTitles.forEach((e, i) => {
		e.textContent = settingsShowObj[lang][i]
	})
} 