const time = document.querySelector('.main__data-time')

const showTime = () => {
	const currentTime = new Date().toLocaleTimeString()
	time.textContent = currentTime
	setInterval(showTime, 1000)
}


showTime()