import { getStorageVolumeValue, setStorageIsMuteValue, getStorageIsMuteValue } from "../localStoragePlayer"
import { audio } from "../playbackControl/playSong"
import { setMuteBtnHref } from "./setMuteBtnHref"

export const checkIsMute = () => {
	const volumeValue = getStorageVolumeValue()
	const isMuteValue = getStorageIsMuteValue()
	if (isMuteValue === 'true') {
		audio.volume = volumeValue;
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		setStorageIsMuteValue('false')
	}
	else if (isMuteValue === 'false') {
		audio.volume = 0;
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		setStorageIsMuteValue('true')
	}
}