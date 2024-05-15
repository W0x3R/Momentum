const forbiddenClasses = ['settings__blocksHideControl-title', 'settings__blocksHideControl']

export const hideCheckedBlocksClick = (e) => {
	if (!forbiddenClasses.includes(e.target.className)) {
		const dataShow = e.target.closest('[data-blockshide]').dataset.blockshide
		document.querySelector(`.${dataShow}`).classList.toggle('settings__blocksHideControl_hide')
	}
}