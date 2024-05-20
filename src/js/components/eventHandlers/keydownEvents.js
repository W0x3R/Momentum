import { greetingName } from "../greeting/localStorageGreeting"
import { weatherInput } from "../weather/getWeather"
import { queryInput } from "../query/changePexelsImgOnQueryInputChange"
import { displaySettings } from "../settings/displaySettings"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"
import { trimGreetingName } from "../greeting/setText/trimGreetingName"

const keydownEvents = {
	'Enter': () => {
		greetingName.blur()
		weatherInput.blur()
		queryInput.blur()
		trimGreetingName()
	},
	'Escape': () => {
		displaySettings('remove')
		setSettingsActiveStyles('remove')
	}
}

export const callKeydownEvent = (e) => {
	const key = e.key
	if (key in keydownEvents) {
		keydownEvents[key]()
	}
}