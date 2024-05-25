import { getStorageIsMuteValue } from "../localStoragePlayer"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { audio } from "../playbackControl/playSong"
import { getStorageVolumeValue } from "../localStoragePlayer"

export const checkIsMuteValueLoad = () => {
	const volumeValue = getStorageVolumeValue()
	const isMuteValue = getStorageIsMuteValue()
	if (isMuteValue === 'true') {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		audio.volume = 0
	}
	else if (isMuteValue === 'false') {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		audio.volume = volumeValue
	}
}