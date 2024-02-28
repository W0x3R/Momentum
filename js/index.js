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
const greetingArr = ['night, ', 'morning, ', 'afternoon, ', 'evening, ',]

const showGreetingText = () => {
	const currentTime = new Date().getHours();
	const getGreeting = greetingArr[Math.floor(currentTime / 6)]
	greetingText.textContent = `Good ${getGreeting}`
}

showGreetingText()

const greetingName = document.querySelector('.main__greeting-name')

const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

const getGreetingName = () => {
	const getName = localStorage.getItem('name')
	getName === null ? '' : greetingName.value = getName
}

window.addEventListener('beforeunload', setGreetingName)
window.addEventListener('load', getGreetingName)