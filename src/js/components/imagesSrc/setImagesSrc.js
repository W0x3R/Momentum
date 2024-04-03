const imagesSrcSelect = document.querySelector('.source__select')
const imagesSrcSelectArr = Array.from(imagesSrcSelect.children)

export const setImagesSrc = (num, value) => {
	imagesSrcSelectArr[num].selected = value
}