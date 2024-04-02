import playListSongs from "../../../../playListSongs"
import { count, audio, trackName } from "./switchSong";
import { updateSongTime } from "./updateSongTime";

export const loadSong = () => {
	const currentSong = playListSongs[count]
	audio.src = currentSong.src
	trackName.textContent = currentSong.title
	updateSongTime()
}