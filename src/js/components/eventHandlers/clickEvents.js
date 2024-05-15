import { rotateQuotesChangeBtn } from "../quotes/rotateQuotesChangeBtn"
import { setStorageCheckedItems } from "../settings/localStorageSettingsShow"
import { setCheckedInputsClick } from "../settings/setCheckedInputs/setCheckedInputsClick"
import { hideCheckedBlocksClick } from "../settings/hideCheckedBlocks/hideCheckedBlocksClick"
import { clearGreetingsName } from "../greeting/clearGreetingsName"
import { controlErrorPopupClass } from "../slider/errorPopup/controlErrorPopupClass"
import { playbackControl } from "../player/playbackControl/playbackControl"
import { playClickedSong } from "../player/switchSong/playClickedSong"
import { nextSong } from "../player/switchSong/nextSong"
import { prevSong } from "../player/switchSong/prevSong"
import { rewindSong } from "../player/progressBar/rewindSong"
import { changePexelsImagesClick } from "../slider/changeImages/Pexels/changePexelsImagesClick"
import { changeGithubImagesClick } from "../slider/changeImages/Github/changeGithubImagesClick"
import { checkIsMute } from "../player/checkIsMute"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"
import { displaySettings } from "../settings/displaySettings"
import { changeQuote } from "../quotes/changeQuote"

export const clickEvents = {
	'.main__button_prev': () => {
		changeGithubImagesClick('prev')
		changePexelsImagesClick('prev')
	},
	'.main__button_next': () => {
		changeGithubImagesClick('next')
		changePexelsImagesClick('next')
	},
	'.player__controls-play': playbackControl,
	'.player__progress': (e) => rewindSong(e),
	'.player__controls-prev': prevSong,
	'.player__controls-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__sounds-mute': checkIsMute,
	'.popup__button': () => {
		controlErrorPopupClass('remove')
	},
	'.popup__shadow_show-slider': () => {
		controlErrorPopupClass('remove')
	},
	'.settings__icon': () => {
		setSettingsActiveStyles('toggle'),
			displaySettings('toggle')
	},
	'.settings__close-button': () => {
		displaySettings('remove'),
			setSettingsActiveStyles('remove')
	},
	'.quotes__change-btn': () => {
		changeQuote()
		rotateQuotesChangeBtn()
	},
	'.settings__show': (e) => {
		setCheckedInputsClick(e)
		hideCheckedBlocksClick(e)
		setStorageCheckedItems()
	},
	'.greeting__name': clearGreetingsName
}