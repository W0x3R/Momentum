import playListSongs from "../../../../playListSongs"
import { trackName, audio } from "./playSong";
import { count } from "./setCount";
import { updateSongTime } from "./updateSongTime";

export const loadSong = () => {
	const currSong = playListSongs[count]
	audio.src = currSong.src
	trackName.textContent = currSong.title
	updateSongTime()
}