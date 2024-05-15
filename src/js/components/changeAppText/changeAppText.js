import { getStorageLanguage } from "../language/localStorageLanguage";
import { setGreetingNameText } from "../greeting/setText/greetingName/setGreetingName";
import { showGreetingMessageText } from "../greeting/setText/greetingMessage/showGreetingMessageText";
import { setImagesSrcText } from "../imagesSrc/setText/setImagesSrcText";
import { setLanguageText } from "../language/setText/setLanguageText";
import { setQueryLabelText } from "../query/setText/setQueryLabelText";
import { setErrorPopupText } from "../slider/errorPopup/setText/setErrorPopupText";
import { setSettingsText } from "../settings/setText/setSettingsText";

export const changeAppText = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		setGreetingNameText('en')
		setImagesSrcText('en')
		setLanguageText('en', 'en', 'en', 'ru', 'en')
		setQueryLabelText('en')
		setErrorPopupText('en')
		setSettingsText('en')
	}
	else if (currLang === 'ru') {
		setGreetingNameText('ru')
		setImagesSrcText('ru')
		setLanguageText('ru', 'en', 'ru', 'ru', 'ru')
		setQueryLabelText('ru')
		setErrorPopupText('ru')
		setSettingsText('ru')
	}
	showGreetingMessageText()
}