export const setCheckedInputsClick = (e) => {
	if (e.target.closest('.settings__blocksHideControl-inner') && e.target.tagName !== 'INPUT') {
		const closestInput = e.target.closest('.settings__blocksHideControl-inner').querySelector('input')
		closestInput.checked = closestInput.checked ? false : true
	}
}