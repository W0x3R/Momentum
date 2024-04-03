import { getQuotesLanguage } from "./getQuotesLanguage"
import { showQuote } from "./showQuotes"

const changeQuoteBtn = document.querySelector('.quotes__change-btn')

export async function getQuotes() {
	try {
		const fetchRequest = await fetch(getQuotesLanguage())
		const data = await fetchRequest.json()
		showQuote(data)
		changeQuoteBtn.addEventListener('click', () => showQuote(data))
	}
	catch {
		console.error('Error fetching quotes:', error);
	}
}