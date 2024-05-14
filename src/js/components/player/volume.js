import { audio } from "./playbackControl/playSong";
import { setStorageVolumeValue, getStorageVolumeValue } from "./localStoragePlayer";
import { isMute, setIsMute } from "./setMute";

export const volumeBtn = document.querySelector('.player__sounds-volume')
const volumeMuteBtnIcon = document.querySelector(`.player__sounds-mute svg use`)
const volumeMuteBtn = document.querySelector('.player__sounds-mute')

const setMuteBtnHref = (iconName) => {
	volumeMuteBtnIcon.setAttribute('href', `./images/svg/${iconName}`)
}

export const checkChangeVolume = () => {
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

const setVolumeBtnIcon = (volumeValue, volumeButtonValue, iconName, isMuteValue) => {
	audio.volume = volumeValue
	volumeBtn.value = volumeButtonValue
	getStorageVolumeValue(iconName)
	setIsMute(isMuteValue)
}

export const checkIsMute = () => {
	const volumeValue = getStorageVolumeValue()
	isMute ? setVolumeBtnIcon(volumeValue, volumeValue, setMuteBtnHref('muteSongBtn.svg#muteSong'), false) : setVolumeBtnIcon(0, 0, setMuteBtnHref('unMuteSongBtn.svg#unMuteSong'), true)
}

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