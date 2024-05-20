const popupGreetingBtn = document.querySelector('.greeting__popup-close-button')

export const controlGreetingPopupBtnHover = (value) => {
	popupGreetingBtn.classList[value]('greeting__popup-close-button_hover')
}