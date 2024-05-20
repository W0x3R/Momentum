import { playSong } from "./playSong"
import { pauseSong } from "./pauseSong"
import { isPlay } from "./setIsPlay"

export const playbackControl = () => isPlay ? pauseSong() : playSong()