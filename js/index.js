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

const greetingText = document.querySelector('.main__greeting-text')
const greetingArr = ['Good night, ', 'Good morning, ', 'Good afternoon, ', 'Good evening, ',]

const showGreeting = () => {
	const currentTime = new Date().getHours();
	const getGreeting = greetingArr[Math.floor(currentTime / 6)]
	greetingText.textContent = getGreeting
}

showGreeting()