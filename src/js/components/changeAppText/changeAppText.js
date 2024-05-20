import { getStorageLanguage } from "../language/localStorageLanguage";
import { setGreetingNamePlaceholder } from "../greeting/setText/greetingNamePlaceholder/setGreetingNamePlaceholder";
import { showGreetingMessageText } from "../greeting/setText/greetingMessage/showGreetingMessageText";
import { setImagesSrcText } from "../imagesSrc/setText/setImagesSrcText";
import { setLanguageSelectText } from "../language/setText/setLanguageSelectText";
import { setLanguageDescriptionText } from "../language/setText/setLanguageDescriptionText";
import { setQueryLabelText } from "../query/setText/setQueryLabelText";
import { setSliderPopupText } from "../slider/sliderPopup/setText/setSliderPopupText";
import { setSettingsTitleText } from "../settings/setText/titleText/setSettingsTitleText";
import { setSettingsInputsText } from "../settings/setText/inputsText/setSettingsInputsText";
import { setGreetingErrorPopupText } from "../greeting/setGreetingErorrPopupText";

export const changeAppText = () => {
	const currLang = getStorageLanguage()
	if (currLang === 'en') {
		setGreetingNamePlaceholder('en')
		setImagesSrcText('en')
		setLanguageSelectText('en', 'en', 'en', 'ru')
		setLanguageDescriptionText('en')
		setQueryLabelText('en')
		setSliderPopupText('en')
		setSettingsTitleText('en')
		setSettingsInputsText('en')
		setGreetingErrorPopupText('en')
	}
	else if (currLang === 'ru') {
		setGreetingNamePlaceholder('ru')
		setImagesSrcText('ru')
		setLanguageSelectText('ru', 'en', 'ru', 'ru')
		setLanguageDescriptionText('ru')
		setQueryLabelText('ru')
		setSliderPopupText('ru')
		setSettingsTitleText('ru')
		setSettingsInputsText('ru')
		setGreetingErrorPopupText('ru')
	}
	showGreetingMessageText()
}