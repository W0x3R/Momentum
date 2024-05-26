import { getStorageLanguage } from "../../../language/localStorageLanguage";
import { setGreetingMessageText } from "../../../greeting/setText/greetingMessage/setGreetingMessageText";
import { translateGreeting } from "../../../greeting/translateGreeting";
import { getStorageImagesSrc } from "../../../imagesSrc/localStorageImagesSrc";
import { queryWrapper } from "../../../query/changePexelsImgOnQueryInputChange";
import { loadImageFromUrl } from "../imageLoader";
import { randomNumGithub } from "./githubImageClickChanger ";

export const changeGithubImages = () => {
	const imagesSrc = getStorageImagesSrc()
	if (imagesSrc === 'github') {
		queryWrapper.classList.add('query_hide')
		const greetingText = setGreetingMessageText().split(' ')[1].slice(0, -1);
		const currLang = getStorageLanguage();
		let value = currLang === 'en' ? greetingText : translateGreeting(greetingText)
		let randomNum = randomNumGithub.toString().padStart(2, '0')
		let url = `https://raw.githubusercontent.com/W0x3R/momentum-images/Main/${value}/${randomNum}.webp`
		loadImageFromUrl(url)
	}
}