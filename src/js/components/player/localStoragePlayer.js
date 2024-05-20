import { volumeInput } from "./volume/setVolumeBtnValue"

export const setStorageVolumeValue = () => localStorage.setItem('volumeValue', volumeInput.value)
export const getStorageVolumeValue = () => localStorage.getItem('volumeValue') || volumeInput.value