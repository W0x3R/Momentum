export const settingsShowInputs = document.querySelectorAll('.settings__show input')

export const setStorageCheckedItems = () => {
	const indexOfCheckedInputs = Array.from(settingsShowInputs).map((e, i) => e.checked ? i : null).filter(e => e !== null)
	localStorage.setItem('indexOfCheckedInputs', JSON.stringify(indexOfCheckedInputs))
}

export const getStorageCheckedItems = () => JSON.parse(localStorage.getItem('indexOfCheckedInputs'))