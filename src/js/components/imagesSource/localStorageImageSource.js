export const setImagesSourceDefault = () => {
	if (!localStorage.getItem('source')) {
		setImagesSource('github')
	}
}

export const getImagesSource = () => localStorage.getItem('source')

export const setImagesSource = (value) => {
	localStorage.setItem('source', value)
}