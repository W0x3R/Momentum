import { volumeBtn } from "./volume/setVolumeBtnValue"

export const setStorageVolumeValue = () => {
	localStorage.setItem('volumeValue', volumeBtn.value)
}

export const getStorageVolumeValue = () => localStorage.getItem('volumeValue') || volumeBtn.value