import { setStorageImagesSource, getStorageImagesSource } from "./localStorageImageSource";
import { changeBackground } from "../slider/changeBackground";

const imagesSourceSelect = document.querySelector('.source__select')
const imagesSourceSelectArray = Array.from(imagesSourceSelect.children)

const setSelectedImagesSourceValue = (number, value) => {
	imagesSourceSelectArray[number].selected = value
}

export const checkSelectedImagesSourceValue = () => {
	const getSource = getStorageImagesSource()
	if (getSource === 'github') {
		setSelectedImagesSourceValue(1, false)
		setSelectedImagesSourceValue(0, true)
	} else if (getSource === 'pexels') {
		setSelectedImagesSourceValue(0, false)
		setSelectedImagesSourceValue(1, true)
	}
}

export const changeImagesSourceSelectValue = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		setStorageImagesSource('github')
		changeBackground()
	} else {
		setStorageImagesSource('pexels')
		changeBackground()
	}
}