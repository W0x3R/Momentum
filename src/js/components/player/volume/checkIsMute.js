import { getStorageVolumeValue } from "../localStoragePlayer"
import { isMute } from "./setMute"
import { setVolumeBtnIcon } from "./setVolumeBtnIcon"

export const checkIsMute = () => {
	const volumeValue = getStorageVolumeValue()
	isMute ? setVolumeBtnIcon(volumeValue, 'muteSongBtn.svg#muteSong', false) : setVolumeBtnIcon(0, 'unMuteSongBtn.svg#unMuteSong', true)
}