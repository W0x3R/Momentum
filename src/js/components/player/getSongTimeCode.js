let seconds;
let minutes;

export function getSongTimeCode(num) {
	seconds = parseInt(num);
	minutes = parseInt(seconds / 60);
	seconds -= minutes * 60;
	return `${minutes}:${String(seconds).padStart(2, 0)}`;
}