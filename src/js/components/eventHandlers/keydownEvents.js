import { greetingName } from "../greeting/localStorageGreeting"
import { weatherInput } from "../weather/getWeather"
import { queryInput } from "../query/changePexelsImgOnQueryInputChange"
import { showSettings } from "../settings/showSettings"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"
import { trimGreetingName } from "../greeting/setText/trimGreetingName"
import { showGreetingPopup } from "../greeting/showGreetingPopup"

export const keydownEvents = {
	'Enter': () => {
		greetingName.blur()
		weatherInput.blur()
		queryInput.blur()
		trimGreetingName()
	},
	'Escape': () => {
		showSettings('remove')
		setSettingsActiveStyles('remove')
		showGreetingPopup('remove')
	}
}