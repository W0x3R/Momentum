import playListSongs from "../../../../playListSongs"
import { count, audio, trackName } from "./switchSong";
import { updateSongTime } from "./updateSongTime";

export const loadSong = () => {
	const currSong = playListSongs[count]
	audio.src = currSong.src
	trackName.textContent = currSong.title
	updateSongTime()
}