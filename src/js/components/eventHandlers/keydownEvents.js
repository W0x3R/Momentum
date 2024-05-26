import { greetingName } from "../greeting/localStorageGreeting"
import { weatherInput } from "../weather/weatherAPI"
import { queryInput } from "../query/changePexelsImgOnQueryInputChange"
import { showSettings } from "../settings/showSettings"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"
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
		setSettingsActiveStyles('remove')
		showGreetingPopup('remove')
	}
}