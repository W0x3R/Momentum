const srcDescription = document.querySelector('.source__description')
const srcDescriptionObj = {
	en: 'Source of images:',
	ru: 'Источник изображений:'
}

export const setImagesSrcText = (lang) => {
	srcDescription.textContent = srcDescriptionObj[lang]
}