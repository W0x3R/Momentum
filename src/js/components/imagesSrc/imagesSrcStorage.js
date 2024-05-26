export const getStorageImagesSrc = () => localStorage.getItem('source') || 'github'

export const setStorageImagesSrc = (value) => localStorage.setItem('source', value)