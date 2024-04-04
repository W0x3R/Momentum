import { getStorageLanguage } from "../language/localStorageLanguage"

const srcDescription = document.querySelector('.source__description')

const srcDescriptionObj = {
	en: 'Source of images:',
	ru: 'Источник изображений:'
}
const setSrcDescriptionText = (value) => {
	srcDescription.textContent = srcDescriptionObj[value]
}

export const changeSrcDescriptionText = () => {
	const currLang = getStorageLanguage()
	currLang === 'en' ? setSrcDescriptionText('en') : setSrcDescriptionText('ru')
}