const time = document.querySelector('.main__data-time')

const showTime = () => {
	const currentTime = new Date().toLocaleTimeString()
	time.textContent = currentTime
	setInterval(() => {
		showTime()
		showDate()
	}, 1000)
}

showTime()

const date = document.querySelector('.main__data-date')
const dateOptions = {
	weekday: "long",
	month: "long",
	day: "numeric",
}
const showDate = () => {
	const currentDate = new Date().toLocaleDateString('en-US', dateOptions)
	date.textContent = currentDate

}

showDate()