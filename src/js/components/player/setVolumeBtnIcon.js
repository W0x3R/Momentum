import { audio } from "./playbackControl/playSong"
import { volumeBtn } from "./volume"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { setIsMute } from "./setMute"

export const setVolumeBtnIcon = (volumeValue, iconName, isMuteValue) => {
	audio.volume = volumeValue
	volumeBtn.value = volumeValue
	setMuteBtnHref(iconName)
	setIsMute(isMuteValue)
}