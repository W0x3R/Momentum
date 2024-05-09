import { setStorageImagesSrc } from "./localStorageImagesSrc";
import { changeGithubImages } from "../slider/changeImages/Github/changeGithubImages";
import { changePexelsImages } from "../slider/changeImages/changePexelsImages";

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