export const progressInput = document.querySelector('.player__progress-input')

export const updateProgressInput = (e) => {
	const { duration, currentTime } = e.srcElement
	if (duration) {
		progressInput.max = duration;
		progressInput.value = currentTime
	}
}