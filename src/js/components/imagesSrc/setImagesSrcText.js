const srcDescription = document.querySelector('.source__description')

const srcDescriptionObj = {
	en: 'Source of images:',
	ru: 'Источник изображений:'
}
export const setImagesSrcText = (value) => {
	srcDescription.textContent = srcDescriptionObj[value]
}