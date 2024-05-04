import { audio } from "./playSong";
import { setStorageVolumeValue, getStorageVolumeValue } from "./localStoragePlayer";

export const volumeBtn = document.querySelector('.player__sounds-volume')
const volumeMuteBtnIcon = document.querySelector(`.player__sounds-mute svg use`)
const volumeMuteBtn = document.querySelector('.player__sounds-mute')
let isMute = false;

const setMuteBtnHref = (iconName) => {
	volumeMuteBtnIcon.setAttribute('href', `./images/svg/${iconName}`)
}

export const checkChangeVolume = () => {
	audio.volume = volumeBtn.value
	setStorageVolumeValue()
	if (audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		volumeMuteBtn.setAttribute('disabled', true)
		isMute = true;
	}
	else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		volumeMuteBtn.removeAttribute('disabled')
		isMute = false;
	}
}

const setVolumeBtnIcon = (volumeValue, volumeButtonValue, iconName, isMuteValue) => {
	audio.volume = volumeValue
	volumeBtn.value = volumeButtonValue
	getStorageVolumeValue(iconName)
	isMute = isMuteValue
}

export const checkIsMute = () => {
	const volumeValue = getStorageVolumeValue()
	isMute ? setVolumeBtnIcon(volumeValue, volumeValue, setMuteBtnHref('muteSongBtn.svg#muteSong'), false) : setVolumeBtnIcon(0, 0, setMuteBtnHref('unMuteSongBtn.svg#unMuteSong'), true)
}

export const setVolumeBtnValue = () => {
	const volumeValue = getStorageVolumeValue()
	audio.volume = volumeValue
	volumeBtn.value = volumeValue
	console.log(audio.volume);
	console.log(volumeBtn.value);
	if (audio.volume === 0) {
		setMuteBtnHref('unMuteSongBtn.svg#unMuteSong')
		isMute = true;
	} else {
		setMuteBtnHref('muteSongBtn.svg#muteSong')
		isMute = false;
	}
}