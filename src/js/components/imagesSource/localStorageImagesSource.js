export const setStorageImagesSourceDefault = () => {
	const storageImagesSource = getStorageImagesSource()
	if (!storageImagesSource) {
		setStorageImagesSource('github')
	}
}

export const getStorageImagesSource = () => localStorage.getItem('source')

export const setStorageImagesSource = (value) => {
	localStorage.setItem('source', value)
}