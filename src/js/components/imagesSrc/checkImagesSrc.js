import { getStorageImagesSrc } from "./localStorageImagesSrc";
import { setImagesSrc } from "./setImagesSrc";

export const checkImagesSrc = () => {
	const getSrc = getStorageImagesSrc()
	if (getSrc === 'github') {
		setImagesSrc(1, false)
		setImagesSrc(0, true)
	} else if (getSrc === 'pexels') {
		setImagesSrc(0, false)
		setImagesSrc(1, true)
	}
}