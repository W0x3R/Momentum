import { audio } from "./playbackControl/playSong"
import { setStorageVolumeValue } from "./localStoragePlayer"
import { setMuteBtnHref } from "./setMuteBtnHref"
import { setIsMute } from "./setMute"
import { volumeBtn } from "./volume"

const volumeMuteBtn = document.querySelector('.player__sounds-mute')

export const setBtnStateOnVolumeValue = () => {
	audio.volume = volumeBtn.value
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