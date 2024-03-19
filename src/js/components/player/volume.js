import { volumeButton, volumeMuteButtonIcon, audio } from "./switchSong";

const volumeMuteButton = document.querySelector('.player__sounds-mute')
let isMute = false;

volumeButton.addEventListener('input', function (e) {
	audio.volume = this.value
	sessionStorage.setItem('volumeValue', volumeButton.value)
	if (audio.volume === 0) {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/noVolume.svg#mute')
		volumeMuteButton.setAttribute('disabled', true)
		isMute = true;
	}
	else {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/volume.svg#volume-on')

		volumeMuteButton.removeAttribute('disabled')
		isMute = false;
	}
})

volumeMuteButton.addEventListener('click', function (e) {
	if (isMute) {
		audio.volume = sessionStorage.getItem('volumeValue')
		volumeButton.value = sessionStorage.getItem('volumeValue')
		volumeMuteButtonIcon.setAttribute('href', './images/svg/volume.svg#volume-on')
		isMute = false
	}
	else {
		audio.volume = 0;
		volumeButton.value = 0;
		volumeMuteButtonIcon.setAttribute('href', './images/svg/noVolume.svg#mute')

		isMute = true;
	}
})

document.addEventListener('DOMContentLoaded', function (e) {
	if (!sessionStorage.getItem('volumeValue')) {
		sessionStorage.setItem('volumeValue', volumeButton.value)
	}
	audio.volume = sessionStorage.getItem('volumeValue')
	volumeButton.value = sessionStorage.getItem('volumeValue')
	if (audio.volume === 0) {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/noVolume.svg#mute')
		isMute = true;
	}
	else {
		volumeMuteButtonIcon.setAttribute('href', './images/svg/volume.svg#volume-on')
		isMute = false;
	}

});