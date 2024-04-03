const time = document.querySelector('.data__time')

export const showTime = () => {
	const currTime = new Date().toLocaleTimeString()
	time.textContent = currTime
}