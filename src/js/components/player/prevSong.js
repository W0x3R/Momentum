import playListSongs from "../../../../playListSongs.js"
import { count, setCount, decrementCount } from "./setCount"
import { loadSong } from "./loadSong"
import { playSong } from "./playSong"

export const prevSong = () => {
	document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	decrementCount()
	if (count < 0) {
		setCount(playListSongs.length - 1)
	}
	loadSong()
	playSong()
}