import playListSongs from "../../../../../playListSongs.js"
import { count, setCount, decrementCount } from "./setCount.js"
import { loadSong } from "../loadSong.js"
import { playSong } from "../playbackControl/playSong.js"

export const prevSong = () => {
	const songList = document.querySelectorAll('.player__list-item')
	songList[count].classList.remove('player__list-item_active')
	decrementCount()
	if (count < 0) {
		setCount(playListSongs.length - 1)
	}
	loadSong()
	playSong()
}