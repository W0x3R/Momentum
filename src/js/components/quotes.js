import { getRandomNumber } from "./slider"

const changeQuoteButton = document.querySelector('.quotes__change-btn')
const quote = document.querySelector('.quotes__text')
const author = document.querySelector('.quotes__author')

function showQuote(data) {
	const randomNumber = getRandomNumber(0, data.length - 1)
	quote.textContent = data[randomNumber].quote
	author.textContent = data[randomNumber].author
}

async function getQuotes() {
	try {
		const fetchRequest = await fetch('quotes.json')
		const data = await fetchRequest.json()
		showQuote(data)
		changeQuoteButton.addEventListener('click', () => showQuote(data))
	}
	catch {
		console.error('Error fetching quotes:', error);
	}

}
getQuotes()

