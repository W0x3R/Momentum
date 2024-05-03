import { setStorageGreetingName } from "../greeting/localStorageGreeting"
import { checkChangeVolume } from "../player/volume"

export const inputEvents = {
	'.player__sounds-volume': checkChangeVolume,
	'.greeting__name': setStorageGreetingName
}