import { greetingName } from "../greeting/localStorageGreeting"
import { weatherCityInput } from "../weather/getWeather"
import { queryInput } from "../query/queryValues"
import { displaySettings } from "../settings/displaySettings"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"

const keydownEvents = {
	'Enter': () => {
		greetingName.blur()
		weatherCityInput.blur()
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