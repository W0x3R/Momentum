import { greetingName } from "../greeting/greetingStorage"
import { weatherInput } from "../weather/fetchWeatherData "
import { queryInput } from "../query/changePexelsImgOnQueryInputChange"
import { showSettings } from "../settings/settingsVisibility"
import { updateSettingsActiveStyles } from "../settings/settingsStyler"
import { setGreetingNameTrim } from "../greeting/setText/greetingName/setGreetingNameTrim"
import { showGreetingPopup } from "../greeting/greetingPopup/showGreetingPopup"
import { showSliderPopup } from "../slider/sliderPopup/sliderPopupVisibility"

export const keydownEvents = {
	'Enter': () => {
		greetingName.blur()
		weatherInput.blur()
		queryInput.blur()
		setGreetingNameTrim()
	},
	'Escape': () => {
		showSettings('remove')
		updateSettingsActiveStyles('remove')
		showGreetingPopup('remove')
		showSliderPopup('remove')
	}
}