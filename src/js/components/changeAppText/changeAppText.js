import { getStorageLanguage } from "../language/localStorageLanguage";
import { setGreetingNamePlaceholder } from "../greeting/setText/greetingNamePlaceholder/setGreetingNamePlaceholder";
import { showGreetingMessageText } from "../greeting/setText/greetingMessage/showGreetingMessageText";
import { setImagesSrcText } from "../imagesSrc/setText/setImagesSrcText";
import { setLanguageText } from "../language/setText/setLanguageText";
import { setQueryLabelText } from "../query/setText/setQueryLabelText";
import { setSliderPopupText } from "../slider/sliderPopup/setText/setSliderPopupText";
import { setSettingsText } from "../settings/setText/setSettingsText";
import { setGreetingErrorPopupText } from "../greeting/setGreetingErorrPopupText";

export const changeAppText = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		setGreetingNamePlaceholder('en')
		setImagesSrcText('en')
		setLanguageText('en', 'en', 'en', 'ru', 'en')
		setQueryLabelText('en')
		setSliderPopupText('en')
		setSettingsText('en')
		setGreetingErrorPopupText('en')
	}
	else if (currLang === 'ru') {
		setGreetingNamePlaceholder('ru')
		setImagesSrcText('ru')
		setLanguageText('ru', 'en', 'ru', 'ru', 'ru')
		setQueryLabelText('ru')
		setSliderPopupText('ru')
		setSettingsText('ru')
		setGreetingErrorPopupText('ru')
	}
	showGreetingMessageText()
}