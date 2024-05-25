import { volumeInput } from "./volume/setVolumeValueLoad"
import { isMute } from "./volume/setMute"

export const setStorageVolumeValue = () => localStorage.setItem('volumeValue', volumeInput.value)
export const getStorageVolumeValue = () => localStorage.getItem('volumeValue') || volumeInput.value

export const setStorageIsMuteValue = () => localStorage.setItem('isMute', isMute)
export const getStorageIsMuteValue = () => localStorage.getItem('isMute')