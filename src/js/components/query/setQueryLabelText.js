import { getStorageLanguage } from "../language/localStorageLanguage"

const queryLabel = document.querySelector('.query__label')
const queryObj = {
	en: 'Search for images by tag:',
	ru: 'Поиск изображений по тэгу:'
}

const setQueryLabelText = (value) => {
	queryLabel.textContent = queryObj[value]
}

export const changeQueryLabelText = () => {
	const currLang = getStorageLanguage()
	currLang === 'en' ? setQueryLabelText('en') : setQueryLabelText('ru')
}