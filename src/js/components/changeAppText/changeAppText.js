import { getStorageLanguage } from "../language/localStorageLanguage";
import { setGreetingNamePlaceholder } from "../greeting/setText/greetingName/greetingNamePlaceholder/setGreetingNamePlaceholder";
import { setGreetingMessageText } from "../greeting/setText/greetingMessage/setGreetingMessageText";
import { setImagesSrcText } from "../imagesSrc/setText/setImagesSrcText";
import { setLanguageSelectText } from "../language/setText/selectText/setLanguageSelectText";
import { setLanguageDescriptionText } from "../language/setText/descriptionText/setLanguageDescriptionText";
import { setQueryLabelText } from "../query/setText/setQueryLabelText";
import { setSliderPopupText } from "../slider/sliderPopup/setText/setSliderPopupText";
import { setSettingsTitleText } from "../settings/setText/titleText/setSettingsTitleText";
import { setSettingsInputsText } from "../settings/setText/inputsText/setSettingsInputsText";
import { setGreetingPopupText } from "../greeting/setGreetingPopupText";

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
		setGreetingPopupText('en')
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
		setGreetingPopupText('ru')
	}
	setGreetingMessageText()
}