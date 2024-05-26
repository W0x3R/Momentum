import { getStorageImagesSrc } from "./imagesSrcStorage";
import { setSelectedImagesSrc } from "./setSelectedImagesSrc";

export const checkSelectedImagesSrc = () => {
	const getSrc = getStorageImagesSrc()
	if (getSrc === 'github') {
		setSelectedImagesSrc(1, false)
		setSelectedImagesSrc(0, true)
	} else if (getSrc === 'pexels') {
		setSelectedImagesSrc(0, false)
		setSelectedImagesSrc(1, true)
	}
}