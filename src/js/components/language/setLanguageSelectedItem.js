export const languageSelect = document.querySelector('.language__select')
export const selectLanguageChildrenArray = Array.from(languageSelect.children)

export const setLanguageSelectedItem = (lang, value) => {
	const item = selectLanguageChildrenArray.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}