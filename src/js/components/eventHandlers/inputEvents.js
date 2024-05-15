import { setStorageGreetingName } from "../greeting/localStorageGreeting"
import { setBtnStateOnVolumeValue } from "../player/volume/setBtnStateOnVolumeValue"
export const inputEvents = {
	'.player__sounds-volume': setBtnStateOnVolumeValue,
	'.greeting__name': setStorageGreetingName
}