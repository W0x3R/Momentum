import { progressInput } from "./updateProgressBar";

export const removeProgressInputDisabled = () => {
	progressInput.removeAttribute('disabled')
	progressInput.classList.add('player__progress-input_pointer')
} 