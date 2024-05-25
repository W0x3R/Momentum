import { audio } from "../playbackControl/playSong";
import { setStorageVolumeValue, getStorageVolumeValue } from "../localStoragePlayer";
import { setIsMute } from "./setMute";
import { setMuteBtnHref } from "./setMuteBtnHref";
import { volumeMuteBtn } from "./setBtnStateOnVolumeValue";

export const volumeInput = document.querySelector('.player__volume-input')

export const setVolumeValueLoad = () => {
	const volumeValue = getStorageVolumeValue()
	audio.volume = volumeValue
	volumeInput.value = volumeValue
	if (audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		volumeMuteBtn.setAttribute('disabled', true)
		setIsMute(true)
	} else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		volumeMuteBtn.removeAttribute('disabled')
		setIsMute(false)
		setStorageVolumeValue()
	}
}