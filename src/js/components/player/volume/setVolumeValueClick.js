import { audio } from "../playbackControl/playSong"
import { setMuteBtnHref } from "./setMuteBtnHref"

export const setVolumeValueClick = (volumeValue, iconName) => {
	audio.volume = volumeValue
	setMuteBtnHref(iconName)
}