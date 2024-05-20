export const settingsShowInputs = document.querySelectorAll('.settings__blocksHideControl input')

export const setStorageSettingsCheckedInputs = () => {
	const indexOfCheckedInputs = Array.from(settingsShowInputs).map((e, i) => e.checked ? i : null).filter(e => e !== null)
	localStorage.setItem('indexOfCheckedInputs', JSON.stringify(indexOfCheckedInputs))
}

export const getStorageSettingsCheckedInputs = () => JSON.parse(localStorage.getItem('indexOfCheckedInputs'))