import { volumeButton, volumeMuteButtonIcon, audio } from "./switchSong";
import { setSessionVolumeValue, getSessionVolumeValue } from "./sessionStoragePlayer";

const volumeMuteButton = document.querySelector('.player__sounds-mute')
let isMute = false;

const setMuteButtonHref = (iconName) => {
	volumeMuteButtonIcon.setAttribute('href', `./images/svg/${iconName}`)
}

export const checkInputChangeVolume = () => {
	audio.volume = volumeButton.value
	setSessionVolumeValue()
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
	getSessionVolumeValue(iconName)
	isMute = isMuteValue
}

export const checkIsMute = () => {
	isMute ? setVolumeButtonIcon(getSessionVolumeValue(), getSessionVolumeValue(), setMuteButtonHref('volume.svg#volume-on'), false) : setVolumeButtonIcon(0, 0, setMuteButtonHref('noVolume.svg#mute'), true)
}

export const setButtonValueContentLoaded = () => {
	if (!getSessionVolumeValue()) {
		setSessionVolumeValue()
	}
	audio.volume = getSessionVolumeValue()
	volumeButton.value = getSessionVolumeValue()
	if (audio.volume === 0) {
		setMuteButtonHref('noVolume.svg#mute')
		isMute = true;
	}
	else {
		setMuteButtonHref('volume.svg#volume-on')
		isMute = false;
	}
}