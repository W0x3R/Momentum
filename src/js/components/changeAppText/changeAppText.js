import { getStorageLanguage } from "../language/localStorageLanguage";
import { setPlaceholderText } from "../greeting/setPlaceholderText";
import { showGreetingText } from "../greeting/showGreeting";
import { setImagesSrcText } from "../imagesSrc/setImagesSrcText";
import { setLanguageText } from "../language/setLanguageText";
import { setQueryLabelText } from "../query/setQueryLabelText";
import { setSettingsTitleText } from "../settings/setSettingsTitleText";

export const changeAppText = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		setPlaceholderText('en')
		setImagesSrcText('en')
		setLanguageText('en', 'en', 'en', 'ru', 'en')
		setQueryLabelText('en')
		setSettingsTitleText('en')
	}
	else if (currLang === 'ru') {
		setPlaceholderText('ru')
		setImagesSrcText('ru')
		setLanguageText('ru', 'en', 'ru', 'ru', 'ru')
		setQueryLabelText('ru')
		setSettingsTitleText('ru')
	}
	showGreetingText()
}