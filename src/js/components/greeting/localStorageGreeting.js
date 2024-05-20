export const greetingName = document.querySelector('.greeting__name')

export const setStorageGreetingName = () => localStorage.setItem('name', (greetingName.textContent).trim())
export const getStorageGreetingName = () => localStorage.getItem('name')