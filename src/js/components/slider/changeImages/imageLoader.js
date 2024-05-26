export const body = document.body
const image = new Image();

export const loadImageFromUrl = (url) => {
	image.src = url
	image.onload = () => body.style.backgroundImage = `url(${url})`
}