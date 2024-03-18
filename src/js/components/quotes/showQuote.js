import { getRandomNumber } from "../slider/getRandomNumber"

const quote = document.querySelector('.quotes__text')
const author = document.querySelector('.quotes__author')

export function showQuote(data) {
	const randomNumber = getRandomNumber(0, data.length - 1)
	quote.textContent = data[randomNumber].quote
	author.textContent = data[randomNumber].author
}