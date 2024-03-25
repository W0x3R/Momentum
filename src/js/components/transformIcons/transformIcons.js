export const selectLanguageWrapper = document.querySelector('.language')
export const selectSourceImagesWrapper = document.querySelector('.source')
export const languageSelect = document.querySelector('.language__select')

export const rotateLanguageIcon = (tag, classToggle) => {
	tag.classList.toggle(classToggle)
}

export const closeLanguageIcon = (e, containsClassList, tag, removeClassList) => {
	!e.target.classList.contains(containsClassList) ? tag.classList.remove(removeClassList) : ''
}