import { getStorageVolumeValue, setStorageIsMuteValue, getStorageIsMuteValue } from "../playerStorage"
import { audio } from "../playbackControl/playSong"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { muteSongBtn, unMuteSongBtn } from "./setMuteBtnHref"

export const checkIsMute = () => {
	const volumeValue = getStorageVolumeValue()
	const isMuteValue = getStorageIsMuteValue()
	if (isMuteValue === 'true') {
		audio.volume = volumeValue;
		setMuteBtnHref(muteSongBtn, 'muteSong')
		setStorageIsMuteValue('false')
	}
	else if (isMuteValue === 'false') {
		audio.volume = 0;
		setMuteBtnHref(unMuteSongBtn, 'unMuteSong')
		setStorageIsMuteValue('true')
	}
}