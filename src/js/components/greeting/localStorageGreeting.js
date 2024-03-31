export const greetingName = document.querySelector('.greeting__name')

export const setStorageGreetingName = () => {
	localStorage.setItem('name', greetingName.value)
}

export const getStorageGreetingName = () => {
	greetingName.value = localStorage.getItem('name') || ''
}