export let count = 0;

export const setCount = (value) => {
	count = value;
}

export const incrementCount = () => count++
export const decrementCount = () => count--