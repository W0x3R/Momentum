import { audio } from "../playbackControl/playSong"
import { setStorageVolumeValue } from "../localStoragePlayer"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { setIsMute } from "./setMute"
import { volumeInput } from "./setVolumeBtnValue"

export const volumeMuteBtn = document.querySelector('.player__volume-mute')

export const setBtnStateOnVolumeValue = () => {
	audio.volume = volumeInput.value
	setStorageVolumeValue()
	if (audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		volumeMuteBtn.setAttribute('disabled', true)
		setIsMute(true)
	}
	else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		volumeMuteBtn.removeAttribute('disabled')
		setIsMute(false)
	}
}