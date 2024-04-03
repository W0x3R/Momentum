import { getStorageImagesSrc } from "./localStorageImagesSrc";
import { setImagesSrc } from "./setImagesSrc";

export const checkImagesSrc = () => {
	const getSource = getStorageImagesSrc()
	if (getSource === 'github') {
		setImagesSrc(1, false)
		setImagesSrc(0, true)
	} else if (getSource === 'pexels') {
		setImagesSrc(0, false)
		setImagesSrc(1, true)
	}
}