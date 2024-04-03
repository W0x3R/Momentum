export const setStorageImagesSrcDefault = () => {
	const storageImagesSrc = getStorageImagesSrc()
	if (!storageImagesSrc) {
		setStorageImagesSrc('github')
	}
}

export const getStorageImagesSrc = () => localStorage.getItem('source')

export const setStorageImagesSrc = (value) => {
	localStorage.setItem('source', value)
}