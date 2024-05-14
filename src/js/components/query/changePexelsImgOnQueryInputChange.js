import { controlErrorPopupClass } from "../slider/errorPopup/controlErrorPopupClass";
import { setStorageNumPicturePexels } from '../slider/localStorageSlider'
import { changePexelsImages } from "../slider/changeImages/Pexels/changePexelsImages";
import { setQueryValue } from "./setQueryValue";

export const queryWrapper = document.querySelector('.query')
export const queryInput = document.querySelector('.query__input')
const forbiddenSymbols = ['#', '%', '&', '+', ';']

export const changePexelsImgOnQueryInputChange = () => {
	const queryInputValue = String(queryInput.value.trim())
	const checkIncludeForbiddenSymbols = Array.from(queryInputValue).some(e => forbiddenSymbols.includes(e))
	if (queryInputValue === '' || checkIncludeForbiddenSymbols) {
		controlErrorPopupClass('add')
		return
	}
	setQueryValue(queryInputValue)
	queryInput.value = queryInputValue
	setStorageNumPicturePexels(0)
	changePexelsImages()
}