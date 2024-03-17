const time = document.querySelector('.data__time')

export const showTime = () => {
	const currentTime = new Date().toLocaleTimeString()
	time.textContent = currentTime
}

