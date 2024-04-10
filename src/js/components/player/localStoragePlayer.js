import { volumeBtn } from "./switchSong";

export const setStorageVolumeValue = () => {
	localStorage.setItem('volumeValue', volumeBtn.value)
}

export const getStorageVolumeValue = () => localStorage.getItem('volumeValue')