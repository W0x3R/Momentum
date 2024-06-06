export const languageSelect = document.querySelector('.settings__language-select')
export const selectLanguageChildrenArr = Array.from(languageSelect.children)

export const setSelectedLanguageValue = (lang, value) => {
	const item = selectLanguageChildrenArr.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}