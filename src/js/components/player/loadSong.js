import playListSongs from "../../../../playListSongs"
import { audio, trackName } from "./playbackControl/playSong";
import { count } from "./switchSong/setCount";
import { updateSongTime } from "./updateSongTime";

export const loadSong = () => {
	const currSong = playListSongs[count]
	audio.src = currSong.src
	trackName.textContent = currSong.title
	updateSongTime()
}