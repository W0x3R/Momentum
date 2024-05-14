import { greetingName } from "../greeting/localStorageGreeting"
import { weatherInput } from "../weather/getWeather"
import { queryInput } from "../query/changePexelsImgOnQueryInputChange"
import { displaySettings } from "../settings/displaySettings"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"

const keydownEvents = {
	'Enter': () => {
		greetingName.blur()
		weatherInput.blur()
		queryInput.blur()
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