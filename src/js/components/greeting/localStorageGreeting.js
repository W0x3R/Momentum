export const greetingName = document.querySelector('.greeting__name')

export const setStorageGreetingName = () => {
	localStorage.setItem('name', greetingName.textContent)
}

export const getStorageGreetingName = () => {
	greetingName.textContent = localStorage.getItem('name')
}