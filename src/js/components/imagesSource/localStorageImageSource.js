export const getImagesSource = () => {
	if (!localStorage.getItem('source')) {
		setImagesSource('github')
	} else {
		return localStorage.getItem('source')
	}
}

export const setImagesSource = (value) => {
	localStorage.setItem('source', value)
}