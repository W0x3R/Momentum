import { setImagesSource, getImagesSource } from "./localStorageImageSource";
import { changeBackground } from "../slider/changeBackground";

const imageSourceSelect = document.querySelector('.source__select')
const selectLanguageChildrenArray = Array.from(imageSourceSelect.children)
const setSelectedImageSourceValue = (number, value) => {
	selectLanguageChildrenArray[number].selected = value
}

export const setSelectedSourceValue = () => {
	const getSource = getImagesSource()
	if (getSource === 'github') {
		setSelectedImageSourceValue(1, false)
		setSelectedImageSourceValue(0, true)
	} else if (getSource === 'pexels') {
		setSelectedImageSourceValue(0, false)
		setSelectedImageSourceValue(1, true)
	}
}

export const checkImageSourceSelectValue = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		setImagesSource('github')
		changeBackground()
	} else {
		setImagesSource('pexels')
		changeBackground()
	}
}