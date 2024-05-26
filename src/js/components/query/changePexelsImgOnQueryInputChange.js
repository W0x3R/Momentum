import { showSliderPopup } from "../slider/sliderPopup/showSliderPopup";
import { setStorageNumPicturePexels } from '../slider/sliderStorage'
import { changePexelsImages } from "../slider/changeImages/Pexels/changePexelsImages";
import { setQueryVariableValue } from "./setQueryValue/setQueryVariableValue";

export const queryWrapper = document.querySelector('.query')
export const queryInput = document.querySelector('.query__input')
const forbiddenSymbols = ['#', '%', '&', '+', ';']

export const changePexelsImgOnQueryInputChange = () => {
	const queryInputValue = String(queryInput.value.trim())
	const checkIncludeForbiddenSymbols = Array.from(queryInputValue).some(e => forbiddenSymbols.includes(e))
	if (queryInputValue === '' || checkIncludeForbiddenSymbols) {
		showSliderPopup('add')
		return
	}
	setQueryVariableValue(queryInputValue)
	queryInput.value = queryInputValue
	setStorageNumPicturePexels(0)
	changePexelsImages()
}