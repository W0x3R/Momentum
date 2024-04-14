const forbiddenClasses = ['settings__show-title', 'settings__show', 'settings__show-inner']

export const hideCheckedBlocksClick = (e) => {
	if (!forbiddenClasses.includes(e.target.className)) {
		const dataShow = e.target.closest('[data-show]').dataset.show
		document.querySelector(`.${dataShow}`).classList.toggle('settings__show_hide')
	}
}