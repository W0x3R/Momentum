import playListSongs from "../../../../playListSongs.js"
import { count, setCount, incrementCount } from "./setCount"
import { loadSong } from "./loadSong.js"
import { playSong } from "./playSong"

export const nextSong = () => {
	const songList = document.querySelectorAll('.player__list-item')
	songList[count].classList.remove('player__list-item_active')
	incrementCount()
	if (count > playListSongs.length - 1) {
		setCount(0)
	}
	loadSong()
	playSong()
}