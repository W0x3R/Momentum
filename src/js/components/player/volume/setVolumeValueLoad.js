import { audio } from "../playbackControl/playSong";
import { setStorageVolumeValue, getStorageVolumeValue } from "../localStoragePlayer";
import { setMuteBtnHref } from "./setMuteBtnHref";
import { volumeMuteBtn } from "./setVolumeValueChange";

export const volumeInput = document.querySelector('.player__volume-input')

export const setVolumeValueLoad = () => {
	const volumeValue = getStorageVolumeValue()
	audio.volume = volumeValue
	volumeInput.value = volumeValue
	if (audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		volumeMuteBtn.setAttribute('disabled', true)
	} else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		volumeMuteBtn.removeAttribute('disabled')
		setStorageVolumeValue()
	}
}