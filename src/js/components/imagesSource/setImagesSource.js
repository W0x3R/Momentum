const imagesSourceSelect = document.querySelector('.source__select')
const imagesSourceSelectArray = Array.from(imagesSourceSelect.children)

export const setImagesSource = (number, value) => {
	imagesSourceSelectArray[number].selected = value
}