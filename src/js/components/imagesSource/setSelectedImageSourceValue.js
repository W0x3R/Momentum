import { setImagesSource, getImagesSource } from "./localStorageImageSource";
import { changeBackground } from "../slider/changeBackground";

export const imageSourceSelect = document.querySelector('.source__select')
const selectLanguageChildrenArray = Array.from(imageSourceSelect.children)

const setSelectedValue = (number, value) => {
	selectLanguageChildrenArray[number].selected = value
}

export const setSelectedSourceValue = () => {
	const getSource = getImagesSource()
	if (getSource === 'github') {
		setSelectedValue(1, false)
		setSelectedValue(0, true)
	}
	else {
		setSelectedValue(0, false)
		setSelectedValue(1, true)
	}
}

export const checkImageSourceSelectValue = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		setImagesSource('github')
		changeBackground()
	}
	else {
		setImagesSource('pexels')
		changeBackground()
	}
}