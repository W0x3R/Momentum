import { queryInput } from "./changeBackground";

export const getQueryInputValueLoad = () => {
	queryInput.value = localStorage.getItem('queryInputValue')
	return localStorage.getItem('queryInputValue')
}

export const setQueryInputValueBeforeUnload = () => {
	localStorage.setItem('queryInputValue', String(queryInput.value).trim())
}

