const selectWrapper = document.querySelector('.language')
export const select = document.querySelector('.language__select')

export const rotateLanguageIcon = () => {
	selectWrapper.classList.toggle('language__select_open')
}

export const closeLanguageIcon = (e) => {
	!e.target.classList.contains('language__select') ? selectWrapper.classList.remove('language__select_open') : ''
}