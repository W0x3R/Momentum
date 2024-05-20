export const setCheckedInputsClick = (e) => {
	if (e.target.closest('.settings__blocks-hide-inner') && e.target.tagName !== 'INPUT') {
		const closestInput = e.target.closest('.settings__blocks-hide-inner').querySelector('input')
		closestInput.checked = closestInput.checked ? false : true
	}
}