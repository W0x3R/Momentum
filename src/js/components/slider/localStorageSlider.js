import { queryInput } from "./changeBackground";

export const getQueryInputValueLoad = () => {
	queryInput.value = localStorage.getItem('queryInputValue')
	return localStorage.getItem('queryInputValue')
}

export const setQueryInputValueBeforeUnload = () => {
	const queryInputValue = String(queryInput.value).trim()
	localStorage.setItem('queryInputValue', queryInputValue)
}