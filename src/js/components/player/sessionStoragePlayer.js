import { volumeButton } from "./switchSong";

export const setVolumeButtonValue = () => {
	sessionStorage.setItem('volumeValue', volumeButton.value)
}

export const getVolumeButtonValue = () => {
	return sessionStorage.getItem('volumeValue')
}