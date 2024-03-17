export const greetingName = document.querySelector('.greeting__name')

export const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

export const getGreetingName = () => {
	const getName = localStorage.getItem('name')
	getName === null ? '' : greetingName.value = getName
}