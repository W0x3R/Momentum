import { getCurrentLang } from "./localStorageLanguage";
import { select } from "./transformIcon";

const selectChildrenArray = Array.from(select.children)

const findSelectedItem = (lang, value) => {
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
		findSelectedItem('ru', false)
		findSelectedItem('en', true)
	} else if (lang === 'ru') {
		findSelectedItem('en', false)
		findSelectedItem('ru', true)
	}
}