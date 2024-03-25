export const greetingName = document.querySelector('.greeting__name')

export const setGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

export const getGreetingName = () => {
	greetingName.value = localStorage.getItem('name') || ''
}