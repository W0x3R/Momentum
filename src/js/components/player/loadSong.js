import playListSongs from "../../../../playListSongs"
import { audio, trackName } from "./playbackControl/playSong";
import { count } from "./switchSong/setCount";
import { updateSongTime } from "./songTime/updateSongTime";
import { sliceSongTitleLength } from "./sliceSongTitleLength";

export const loadSong = () => {
	const currSong = playListSongs[count]
	const songTitleSlicedText = sliceSongTitleLength(currSong)
	audio.src = currSong.src
	trackName.textContent = songTitleSlicedText
	updateSongTime()
}