import { setStorageImagesSource } from "./localStorageImagesSource";
import { changeBackground } from "../slider/changeBackground";

export const changeImagesSource = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		setStorageImagesSource('github')
		changeBackground()
	} else {
		setStorageImagesSource('pexels')
		changeBackground()
	}
}