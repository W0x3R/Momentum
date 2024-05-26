import { greetingName } from "../greeting/greetingStorage"
import { weatherInput } from "../weather/weatherAPI"
import { queryInput } from "../query/changePexelsImgOnQueryInputChange"
import { showSettings } from "../settings/settingsVisibility"
import { updateSettingsActiveStyles } from "../settings/settingsStyler"
import { setGreetingNameTrim } from "../greeting/setText/greetingName/setGreetingNameTrim"
import { showGreetingPopup } from "../greeting/greetingPopup/showGreetingPopup"

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
	}
}