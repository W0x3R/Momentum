export const setCheckedInputsClick = (e) => {
	if (e.target.classList.contains('settings__show-label')) {
		e.target.nextElementSibling.checked = e.target.nextElementSibling.checked ? false : true;
	}
}