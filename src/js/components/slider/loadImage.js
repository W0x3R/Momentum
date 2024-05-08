export const body = document.body
const image = new Image();

export const loadImage = (url) => {
	image.src = url
	image.onload = () => body.style.backgroundImage = `url(${url})`
}