import { setStorageGreetingName } from "../greeting/localStorageGreeting"
import { setBtnStateOnVolumeValue } from "../player/volume/setBtnStateOnVolumeValue"
import { checkGreetingNameLength } from "../greeting/checkGreetingNameLength"
export const inputEvents = {
	'.player__volume-input': setBtnStateOnVolumeValue,
	'.greeting__name': () => {
		setStorageGreetingName()
		checkGreetingNameLength()
	}
}