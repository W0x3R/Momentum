import { setStorageImagesSrc } from "./localStorageImagesSrc";
import { changeBG } from "../slider/changeBG";

export const changeImagesSrc = (e) => {
	const target = e.target;
	if (target.value === 'github') {
		setStorageImagesSrc('github')
		changeBG()
	} else {
		setStorageImagesSrc('pexels')
		changeBG()
	}
}