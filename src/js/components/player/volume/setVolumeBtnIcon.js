import { audio } from "../playbackControl/playSong"
import { volumeInput } from "./setVolumeBtnValue"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { setIsMute } from "./setMute"

export const setVolumeBtnIcon = (volumeValue, iconName, isMuteValue) => {
	audio.volume = volumeValue
	volumeInput.value = volumeValue
	setMuteBtnHref(iconName)
	setIsMute(isMuteValue)
}