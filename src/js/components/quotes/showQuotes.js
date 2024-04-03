import { getRandomNum } from "../slider/getRandomNum"

const quote = document.querySelector('.quotes__text')
const author = document.querySelector('.quotes__author')

export function showQuote(data) {
	const randomNum = getRandomNum(0, data.length - 1)
	quote.textContent = data[randomNum].quote
	author.textContent = data[randomNum].author
}