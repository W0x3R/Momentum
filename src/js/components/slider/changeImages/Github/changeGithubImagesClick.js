import { getStorageImagesSrc } from "../../../imagesSrc/localStorageImagesSrc"
import { changeGithubImages } from "./changeGithubImages";
import { getRandomNum } from "../../getRandomNum";

const MAX_GITHUB_IMAGES = 20;
export let randomNumGithub = getRandomNum(1, MAX_GITHUB_IMAGES)
let isAnimate = true

export const changeGithubImagesClick = (direction) => {
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'github' && isAnimate) {
		isAnimate = false
		randomNumGithub = (direction === 'prev') ?
			((randomNumGithub === 1) ? MAX_GITHUB_IMAGES : randomNumGithub - 1) :
			((randomNumGithub === MAX_GITHUB_IMAGES) ? 1 : randomNumGithub + 1);
		changeGithubImages()
		setTimeout(() => {
			isAnimate = true
		}, 1000);
	}
}