import { volumeButton } from "./switchSong";

export const setSessionVolumeValue = () => {
	sessionStorage.setItem('volumeValue', volumeButton.value)
}

export const getSessionVolumeValue = () => sessionStorage.getItem('volumeValue')