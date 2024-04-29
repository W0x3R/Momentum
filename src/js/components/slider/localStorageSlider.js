import { queryInput } from "./changeBG";

export const getQueryInputValueLoad = () => {
	queryInput.value = localStorage.getItem('queryInputValue')
	return localStorage.getItem('queryInputValue')
}

export const setQueryInputValueBeforeUnload = () => {
	const queryInputValue = String(queryInput.value).trim()
	localStorage.setItem('queryInputValue', queryInputValue)
}

export const getNumPicturePexels = () => +localStorage.getItem('pexelsNum')

export const setNumPicturePexels = (value) => {
	localStorage.setItem('pexelsNum', value)
}