import { volumeBtn, volumeMuteBtnIcon, audio } from "./switchSong";
import { setSessionVolumeValue, getSessionVolumeValue } from "./sessionStoragePlayer";

const volumeMuteBtn = document.querySelector('.player__sounds-mute')
let isMute = false;

const setMuteBtnHref = (iconName) => {
	volumeMuteBtnIcon.setAttribute('href', `./images/svg/${iconName}`)
}

export const checkChangeVolume = () => {
	audio.volume = volumeBtn.value
	setSessionVolumeValue()
	if (audio.volume === 0) {
		setMuteBtnHref('noVolume.svg#mute')
		volumeMuteBtn.setAttribute('disabled', true)
		isMute = true;
	}
	else {
		setMuteBtnHref('volume.svg#volume-on')
		volumeMuteBtn.removeAttribute('disabled')
		isMute = false;
	}
}

const setVolumeBtnIcon = (volumeValue, volumeButtonValue, iconName, isMuteValue) => {
	audio.volume = volumeValue
	volumeBtn.value = volumeButtonValue
	getSessionVolumeValue(iconName)
	isMute = isMuteValue
}

export const checkIsMute = () => {
	const volumeValue = getSessionVolumeValue()
	isMute ? setVolumeBtnIcon(volumeValue, volumeValue, setMuteBtnHref('volume.svg#volume-on'), false) : setVolumeBtnIcon(0, 0, setMuteBtnHref('noVolume.svg#mute'), true)
}

export const setBtnValueLoad = () => {
	if (!getSessionVolumeValue()) {
		setSessionVolumeValue()
	}
	audio.volume = getSessionVolumeValue()
	volumeBtn.value = getSessionVolumeValue()
	if (audio.volume === 0) {
		setMuteBtnHref('noVolume.svg#mute')
		isMute = true;
	} else {
		setMuteBtnHref('volume.svg#volume-on')
		isMute = false;
	}
}