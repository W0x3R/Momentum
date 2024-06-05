const time = document.querySelector('.date__time')

export const showTime = () => {
	const currTime = new Date().toLocaleTimeString()
	time.textContent = currTime
}