const forbiddenClasses = ['settings__blocks-hide-title', 'settings__blocks-hide']

export const hideCheckedBlocksClick = (e) => {
	if (!forbiddenClasses.includes(e.target.className)) {
		const dataShow = e.target.closest('[data-blockshide]').dataset.blockshide
		document.querySelector(`.${dataShow}`).classList.toggle('settings__blocks-hide_hide')
	}
}