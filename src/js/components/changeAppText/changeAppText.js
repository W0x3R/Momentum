import { getStorageLanguage } from "../language/localStorageLanguage";
import { setPlaceholderText } from "../greeting/setPlaceholderText";
import { showGreetingText } from "../greeting/showGreetingText";
import { setImagesSrcText } from "../imagesSrc/setImagesSrcText";
import { setLanguageText } from "../language/setLanguageText";
import { setQueryLabelText } from "../query/setQueryLabelText";
import { setErrorPopupText } from "../slider/setErrorPopupText";
import { setSettingsText } from "../settings/setSettingsText";

export const changeAppText = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		setPlaceholderText('en')
		setImagesSrcText('en')
		setLanguageText('en', 'en', 'en', 'ru', 'en')
		setQueryLabelText('en')
		setErrorPopupText('en')
		setSettingsText('en')
	}
	else if (currLang === 'ru') {
		setPlaceholderText('ru')
		setImagesSrcText('ru')
		setLanguageText('ru', 'en', 'ru', 'ru', 'ru')
		setQueryLabelText('ru')
		setErrorPopupText('ru')
		setSettingsText('ru')
	}
	showGreetingText()
}