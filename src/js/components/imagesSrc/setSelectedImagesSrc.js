export const imagesSrcSelect = document.querySelector('.settings__source-select')
const imagesSrcSelectArr = Array.from(imagesSrcSelect.children)

export const setSelectedImagesSrc = (num, value) => imagesSrcSelectArr[num].selected = value