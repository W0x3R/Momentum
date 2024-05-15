import { audio } from "../playbackControl/playSong";
import { setStorageVolumeValue, getStorageVolumeValue } from "../localStoragePlayer";
import { setIsMute } from "./setMute";
import { setMuteBtnHref } from "./setMuteBtnHref";

export const volumeBtn = document.querySelector('.player__sounds-volume')

export const setVolumeBtnValue = () => {
	const volumeValue = getStorageVolumeValue()
	audio.volume = volumeValue
	volumeBtn.value = volumeValue
	if (audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		setIsMute(true)
	} else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		setIsMute(false)
		setStorageVolumeValue()
	}
}