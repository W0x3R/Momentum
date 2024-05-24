import { rotateQuotesChangeBtn } from "../quotes/rotateQuotesChangeBtn"
import { setStorageSettingsCheckedInputs } from "../settings/localStorageSettings"
import { setSettingsCheckedInputsClick } from "../settings/setSettingsCheckedInputs/setSettingsCheckedInputsClick"
import { hideCheckedBlocksClick } from "../settings/hideCheckedBlocks/hideCheckedBlocksClick"
import { clearGreetingsName } from "../greeting/clearGreetingsName"
import { showSliderPopup } from "../slider/sliderPopup/showSliderPopup"
import { playbackControl } from "../player/playbackControl/playbackControl"
import { playClickedSong } from "../player/switchSong/playClickedSong"
import { nextSong } from "../player/switchSong/nextSong"
import { prevSong } from "../player/switchSong/prevSong"
import { rewindSong } from "../player/progressBar/rewindSong"
import { changePexelsImagesClick } from "../slider/changeImages/Pexels/changePexelsImagesClick"
import { changeGithubImagesClick } from "../slider/changeImages/Github/changeGithubImagesClick"
import { checkIsMute } from "../player/volume/checkIsMute"
import { setSettingsActiveStyles } from "../settings/setSettingsActiveStyles"
import { showSettings } from "../settings/showSettings"
import { changeQuote } from "../quotes/changeQuote"
import { showGreetingPopup } from "../greeting/greetingPopup/showGreetingPopup"

export const clickEvents = {
	'.slider__button_prev': () => {
		changeGithubImagesClick('prev')
		changePexelsImagesClick('prev')
	},
	'.slider__button_next': () => {
		changeGithubImagesClick('next')
		changePexelsImagesClick('next')
	},
	'.player__playback-play': playbackControl,
	'.player__progress': (e) => rewindSong(e),
	'.player__playback-prev': prevSong,
	'.player__playback-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__volume-mute': checkIsMute,
	'.slider__popup-close-button': () => showSliderPopup('remove'),
	'.greeting__popup-close-button': () => showGreetingPopup('remove'),
	'.popup__shadow-slider_show': () => showSliderPopup('remove'),
	'.popup__shadow-greeting_show': () => showGreetingPopup('remove'),
	'.settings__header': () => {
		setSettingsActiveStyles('toggle'),
			showSettings('toggle')
	},
	'.settings__close-button': () => {
		showSettings('remove'),
			setSettingsActiveStyles('remove')
	},
	'.quotes__change-btn': () => {
		changeQuote()
		rotateQuotesChangeBtn()
	},
	'.settings__blocks-hide': (e) => {
		setSettingsCheckedInputsClick(e)
		hideCheckedBlocksClick(e)
		setStorageSettingsCheckedInputs()
	},
	'.greeting__name': clearGreetingsName
}