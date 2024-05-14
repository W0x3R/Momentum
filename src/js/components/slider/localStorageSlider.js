import { queryInput } from "../query/changePexelsImgOnQueryInputChange"

export const getStorageQueryInputValueLoad = () => {
	queryInput.value = localStorage.getItem('queryInputValue')
	return localStorage.getItem('queryInputValue')
}

export const setStorageQueryInputValueUnload = () => {
	const queryInputValue = String(queryInput.value).trim()
	localStorage.setItem('queryInputValue', queryInputValue)
}

export const getStorageNumPicturePexels = () => +localStorage.getItem('pexelsNum')

export const setStorageNumPicturePexels = (value) => {
	localStorage.setItem('pexelsNum', value)
}