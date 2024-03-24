export const getImageSource = () => {
	if (!localStorage.getItem('source')) {
		setImageSource('github')
	}
	else {
		return localStorage.getItem('source')
	}
}

export const setImageSource = (value) => {
	localStorage.setItem('source', value)
}