import { audio } from "../playbackControl/playSong"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { setIsMute } from "./setMute"

export const setVolumeValueClick = (volumeValue, iconName, isMuteValue) => {
	audio.volume = volumeValue
	setMuteBtnHref(iconName)
	setIsMute(isMuteValue)
}