import { getStorageNumPicturePexels, setStorageNumPicturePexels } from "../../sliderStorage"
import { getStorageImagesSrc } from "../../../imagesSrc/imagesSrcStorage"
import { MAX_PEXELS_IMAGES, changePexelsImages } from "./pexelsImageChanger"

let isAnimate = true

export const changePexelsImagesClick = (direction) => {
	let pexelsNumb = getStorageNumPicturePexels()
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'pexels' && isAnimate) {
		isAnimate = false
		direction === 'prev' ? pexelsNumb <= 0 ? setStorageNumPicturePexels(MAX_PEXELS_IMAGES) : setStorageNumPicturePexels(--pexelsNumb) : pexelsNumb >= MAX_PEXELS_IMAGES ? setStorageNumPicturePexels(0) : setStorageNumPicturePexels(++pexelsNumb)
		changePexelsImages()
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}