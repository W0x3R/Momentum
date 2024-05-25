import { setStorageGreetingName } from "../greeting/localStorageGreeting"
import { setVolumeValueChange } from "../player/volume/setVolumeValueChange"
import { checkGreetingNameLength } from "../greeting/checkGreetingNameLength"
export const inputEvents = {
	'.player__volume-input': setVolumeValueChange,
	'.greeting__name': () => {
		setStorageGreetingName()
		checkGreetingNameLength()
	}
}