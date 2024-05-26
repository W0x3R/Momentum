import { setStorageImagesSrc } from "./localStorageImagesSrc";
import { changeGithubImages } from "../slider/changeImages/Github/githubImageChanger";
import { changePexelsImages } from "../slider/changeImages/Pexels/pexelsImageChanger";

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