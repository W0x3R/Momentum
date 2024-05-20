import { keydownEvents } from "../keydownEvents"

export const callKeydownEvent = (e) => {
	const key = e.key
	if (key in keydownEvents) {
		keydownEvents[key]()
	}
}