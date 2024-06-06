import { rotateQuotesChangeBtn } from "../quotes/quoteBtnRotator"
import { setStorageSettingsCheckedInputs } from "../settings/settingsStorage"
import { loadSettingsCheckedInputsClick } from "../settings/settingsCheckedInputs/loadSettingsCheckedInputsClick"
import { hideCheckedBlocksClick } from "../settings/hideCheckedBlocks/checkedBlocksLoaderClick"
import { clearGreetingsName } from "../greeting/clearGreetingsName"
import { showSliderPopup } from "../slider/sliderPopup/sliderPopupVisibility"
import { playbackControl } from "../player/playbackControl/playbackControl"
import { playClickedSong } from "../player/switchSong/playClickedSong"
import { nextSong } from "../player/switchSong/nextSong"
import { prevSong } from "../player/switchSong/prevSong"
import { changePexelsImagesClick } from "../slider/changeImages/Pexels/pexelsImageClickChanger "
import { changeGithubImagesClick } from "../slider/changeImages/Github/githubImageClickChanger "
import { checkIsMute } from "../player/volume/checkIsMute"
import { updateSettingsActiveStyles } from "../settings/settingsStyler"
import { showSettings } from "../settings/settingsVisibility"
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
	'.player__playback-prev': prevSong,
	'.player__playback-next': nextSong,
	'.player__list': (e) => playClickedSong(e),
	'.player__volume-mute': checkIsMute,
	'.slider__popup-close-button': () => showSliderPopup('remove'),
	'.settings__shadow_show': () => {
		showSettings('remove')
		updateSettingsActiveStyles('remove')
	},
	'.greeting__popup-close-button': () => showGreetingPopup('remove'),
	'.slider__shadow_show': () => showSliderPopup('remove'),
	'.greeting__shadow_show': () => showGreetingPopup('remove'),
	'.settings__header': () => {
		updateSettingsActiveStyles('toggle'),
			showSettings('toggle')
	},
	'.settings__close-button': () => {
		showSettings('remove'),
			updateSettingsActiveStyles('remove')
	},
	'.quotes__change-btn': () => {
		changeQuote()
		rotateQuotesChangeBtn()
	},
	'.settings__blocks-hide': (e) => {
		loadSettingsCheckedInputsClick(e)
		hideCheckedBlocksClick(e)
		setStorageSettingsCheckedInputs()
	},
	'.greeting__name': clearGreetingsName
}