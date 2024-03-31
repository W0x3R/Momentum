import { getStorageCurrentLanguage } from "./localStorageLanguage";

const language = document.querySelector('.language')
export const languageSelect = document.querySelector('.language__select')
const selectLanguageChildrenArray = Array.from(languageSelect.children)
const languageSelectObject = {
	en: {
		en: 'ENGLISH',
		ru: 'RUSSIAN'
	},
	ru: {
		en: 'АНГЛИЙСКИЙ',
		ru: 'РУССКИЙ'
	}
}

const setSelectLanguage = (valueOne, valueTwo, valueThree, valueFour) => {
	selectLanguageChildrenArray[0].textContent = languageSelectObject[valueOne][valueTwo]
	selectLanguageChildrenArray[1].textContent = languageSelectObject[valueThree][valueFour]
}

export const changeSelectLanguage = () => {
	const lang = getStorageCurrentLanguage()
	if (lang === 'en') {
		setSelectLanguage('en', 'en', 'en', 'ru')
	} else if (lang === 'ru') {
		setSelectLanguage('ru', 'en', 'ru', 'ru')
	}
}

export const changeSelectIcon = () => {
	const currentLanguage = getStorageCurrentLanguage()
	if (currentLanguage === 'en') {
		language.classList.remove('language_ru')
		language.classList.add('language_en')
	}
	else if (currentLanguage === 'ru') {
		language.classList.remove('language_en')
		language.classList.add('language_ru')
	}
}



const findLanguageSelectedItem = (lang, value) => {
	const item = selectLanguageChildrenArray.find(e => e.value === lang);
	if (item) {
		item.selected = value;
	} else {
		console.error(`Item with value ${lang} not found`);
	}
}

export const setSelectedLanguageValue = () => {
	const lang = getStorageCurrentLanguage()
	if (lang === 'en') {
		findLanguageSelectedItem('ru', false)
		findLanguageSelectedItem('en', true)
	} else if (lang === 'ru') {
		findLanguageSelectedItem('en', false)
		findLanguageSelectedItem('ru', true)
	}
}