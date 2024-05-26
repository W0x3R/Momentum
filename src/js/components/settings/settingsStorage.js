import { findCheckedSettingsInputs } from "./checkedSettingsInputsFinder"

export const setStorageSettingsCheckedInputs = () => {
	const indexOfCheckedInputs = findCheckedSettingsInputs()
	localStorage.setItem('indexOfCheckedInputs', JSON.stringify(indexOfCheckedInputs))
}

export const getStorageSettingsCheckedInputs = () => JSON.parse(localStorage.getItem('indexOfCheckedInputs'))