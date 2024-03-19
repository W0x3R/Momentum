import { volumeButton, volumeMuteButtonIcon, audio } from "./switchSong";
import { setVolumeButtonValue, getVolumeButtonValue } from "./sessionStoragePlayer";

export const volumeMuteButton = document.querySelector('.player__sounds-mute')
let isMute = false;

const setMuteButtonHref = (iconName) => {
	volumeMuteButtonIcon.setAttribute('href', `./images/svg/${iconName}`)
}

export const checkInputChangeVolume = () => {
	audio.volume = volumeButton.value
	setVolumeButtonValue()
	if (audio.volume === 0) {
		setMuteButtonHref('noVolume.svg#mute')
		volumeMuteButton.setAttribute('disabled', true)
		isMute = true;
	}
	else {
		setMuteButtonHref('volume.svg#volume-on')
		volumeMuteButton.removeAttribute('disabled')
		isMute = false;
	}
}

const setVolumeButtonIcon = (volumeValue, volumeButtonValue, iconName, isMuteValue) => {
	audio.volume = volumeValue
	volumeButton.value = volumeButtonValue
	getVolumeButtonValue(iconName)
	isMute = isMuteValue
}

export const checkIsMute = () => {
	isMute ? setVolumeButtonIcon(getVolumeButtonValue(), getVolumeButtonValue(), setMuteButtonHref('volume.svg#volume-on'), false) : setVolumeButtonIcon(0, 0, setMuteButtonHref('noVolume.svg#mute'), true)
}

export const setButtonValueContentLoaded = () => {
	if (!getVolumeButtonValue()) {
		setVolumeButtonValue()
	}
	audio.volume = getVolumeButtonValue()
	volumeButton.value = getVolumeButtonValue()
	if (audio.volume === 0) {
		setMuteButtonHref('noVolume.svg#mute')
		isMute = true;
	}
	else {
		setMuteButtonHref('volume.svg#volume-on')
		isMute = false;
	}
}