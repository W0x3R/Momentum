import playListSongs from "../../../../playListSongs.js"
import { count, setCount, incrementCount } from "./setCount"
import { loadSong } from "./loadSong.js"
import { playSong } from "./playSong"

export const nextSong = () => {
	document.querySelectorAll('li')[count].classList.remove('player__list-item_active')
	incrementCount()
	if (count > playListSongs.length - 1) {
		setCount(0)
	}
	loadSong()
	playSong()
}