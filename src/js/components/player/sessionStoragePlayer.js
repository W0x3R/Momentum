import { volumeBtn } from "./switchSong";

export const setSessionVolumeValue = () => {
	sessionStorage.setItem('volumeValue', volumeBtn.value)
}

export const getSessionVolumeValue = () => sessionStorage.getItem('volumeValue')