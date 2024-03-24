import { getCurrentLanguage } from "./localStorageLanguage";
import { languageSelect } from "./transformIcon";

const selectLanguageChildrenArray = Array.from(languageSelect.children)

const findLanguageSelectedItem = (lang, value) => {
	const item = selectLanguageChildrenArray.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}

export const setSelectedLanguageValue = () => {
	const lang = getCurrentLanguage()
	if (lang === 'en') {
		findLanguageSelectedItem('ru', false)
		findLanguageSelectedItem('en', true)
	} else if (lang === 'ru') {
		findLanguageSelectedItem('en', false)
		findLanguageSelectedItem('ru', true)
	}
}