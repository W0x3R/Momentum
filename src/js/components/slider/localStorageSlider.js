import { queryInput } from "../query/changePexelsImgOnQueryInputChange"

export const getStorageQueryInputValue = () => localStorage.getItem('queryInputValue')

export const setStorageQueryInputValue = () => {
	const queryInputValue = String(queryInput.value).trim()
	localStorage.setItem('queryInputValue', queryInputValue)
}

export const getStorageNumPicturePexels = () => +localStorage.getItem('pexelsNum')
export const setStorageNumPicturePexels = (value) => localStorage.setItem('pexelsNum', value)