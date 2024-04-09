const queryLabel = document.querySelector('.query__label')
const queryObj = {
	en: 'Search for images by tag:',
	ru: 'Поиск изображений по тэгу:'
}

export const setQueryLabelText = (value) => {
	queryLabel.textContent = queryObj[value]
}