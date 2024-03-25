export const selectLanguageWrapper = document.querySelector('.language')
export const selectSourceImagesWrapper = document.querySelector('.source')
export const languageSelect = document.querySelector('.language__select')

export const rotateIcon = (tag, classToggle) => {
	tag.classList.toggle(classToggle)
}

export const closeIcon = (e, containsClassList, tag, removeClassList) => {
	!e.target.classList.contains(containsClassList) ? tag.classList.remove(removeClassList) : ''
}