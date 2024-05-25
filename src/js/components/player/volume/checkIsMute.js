import { getStorageVolumeValue, setStorageIsMuteValue, getStorageIsMuteValue } from "../localStoragePlayer"
import { setVolumeValueClick } from "./setVolumeValueClick"

export const checkIsMute = () => {
	const volumeValue = getStorageVolumeValue()
	const isMuteValue = getStorageIsMuteValue()
	if (isMuteValue === 'true') {
		setVolumeValueClick(volumeValue, 'muteSongBtn.svg#muteSong', false)
		setStorageIsMuteValue('false')
	}
	else if (isMuteValue === 'false') {
		setVolumeValueClick(0, 'unMuteSongBtn.svg#unMuteSong', true)
		setStorageIsMuteValue('true')
	}
}