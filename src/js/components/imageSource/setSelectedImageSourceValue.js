import { setImageSource, getImageSource } from "./localStorageImageSource";
import { changeBg } from "../slider/changeBackground";

const imageSourceSelect = document.querySelector('.source__select')

const selectLanguageChildrenArray = Array.from(imageSourceSelect.children)

const setSelectedImageSourceValue = (number, value) => {
	selectLanguageChildrenArray[number].selected = value
}

export const setSelectedSourceValue = () => {
	const getSource = getImageSource()
	if (getSource === 'github') {
		setSelectedImageSourceValue(1, false)
		setSelectedImageSourceValue(0, true)
	}
	else {
		setSelectedImageSourceValue(0, false)
		setSelectedImageSourceValue(1, true)
	}
}

imageSourceSelect.addEventListener('change', function (e) {
	const target = e.target;
	if (target.value === 'github') {
		setImageSource('github')
		changeBg()
	}
	else {
		setImageSource('pexels')
		changeBg()
	}
})