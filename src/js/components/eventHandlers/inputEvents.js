import { setStorageGreetingName } from "../greeting/greetingStorage"
import { setVolumeValueChange } from "../player/volume/setVolumeValueChange"
import { checkGreetingNameLength } from "../greeting/checkGreetingNameLength"
import { rewindSong } from "../player/progressBar/rewindSong"
export const inputEvents = {
	'.player__volume-input': setVolumeValueChange,
	'.greeting__name': () => {
		setStorageGreetingName()
		checkGreetingNameLength()
	},
	'.player__progress': rewindSong
}