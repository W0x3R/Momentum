import { getStorageImagesSource } from "./localStorageImagesSource";
import { setImagesSource } from "./setImagesSource";

export const checkImagesSource = () => {
	const getSource = getStorageImagesSource()
	if (getSource === 'github') {
		setImagesSource(1, false)
		setImagesSource(0, true)
	} else if (getSource === 'pexels') {
		setImagesSource(0, false)
		setImagesSource(1, true)
	}
}