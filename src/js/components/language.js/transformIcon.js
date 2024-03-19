export const selectWrapper = document.querySelector('.language')
export const select = document.querySelector('.language__select')


selectWrapper.addEventListener('click', function (e) {
	this.classList.toggle('language__select_open')
})

window.addEventListener('click', function (e) {
	!e.target.classList.contains('language__select') ? selectWrapper.classList.remove('language__select_open') : ''
})



