
import { setStorageImagesSource } from "./localStorageImageSource";
import { changeBackground } from "../slider/changeBackground";

export const changeImagesSourceSelectValue = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		setStorageImagesSource('github')
		changeBackground()
	} else {
		setStorageImagesSource('pexels')
		changeBackground()
	}
}