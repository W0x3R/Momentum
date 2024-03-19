import { getCurrentLang } from "./localStorageLanguage";
import { select } from "./transformIcon";

const selectChildrenArray = Array.from(select.children)

const findItem = (lang, value) => {
	const item = selectChildrenArray.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}

export const setSelectedValue = () => {
	const lang = getCurrentLang()
	if (lang === 'en') {
		findItem('ru', false)
		findItem('en', true)
	} else if (lang === 'ru') {
		findItem('en', false)
		findItem('ru', true)
	}
}