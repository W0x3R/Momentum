import { getStorageVolumeValue } from "../localStoragePlayer"
import { isMute } from "./setMute"
import { setVolumeValueClick } from "./setVolumeValueClick"

export const checkIsMute = () => {
	const volumeValue = getStorageVolumeValue()
	isMute ? setVolumeValueClick(volumeValue, 'muteSongBtn.svg#muteSong', false) : setVolumeValueClick(0, 'unMuteSongBtn.svg#unMuteSong', true)
}