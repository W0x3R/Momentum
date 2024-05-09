import { playSong } from "./playSong"
import { pauseSong } from "./pauseSong"
import { isPlay } from "./setIsPlay"

export const checkFlagSong = () => {
	isPlay ? pauseSong() : playSong()
}