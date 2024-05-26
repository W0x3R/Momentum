import { audio } from "../playbackControl/playSong"
import { setStorageVolumeValue, setStorageIsMuteValue } from "../playerStorage"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { volumeInput } from "./setVolumeValueLoad"

export const volumeMuteBtn = document.querySelector('.player__volume-mute')

export const setVolumeValueChange = () => {
	audio.volume = volumeInput.value
	setStorageVolumeValue()
	if (audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		volumeMuteBtn.setAttribute('disabled', true)
		setStorageIsMuteValue('true')
	}
	else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		volumeMuteBtn.removeAttribute('disabled')
		setStorageIsMuteValue('false')
	}
}