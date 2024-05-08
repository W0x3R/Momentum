import { setStorageImagesSrc } from "./localStorageImagesSrc";
import { changeGithubImages } from "../slider/changeGithubImages";
import { changePexelsImages } from "../slider/changePexelsImages";

export const changeImagesSrc = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		setStorageImagesSrc('github')
		changeGithubImages()
	} else {
		setStorageImagesSrc('pexels')
		changePexelsImages()
	}
}