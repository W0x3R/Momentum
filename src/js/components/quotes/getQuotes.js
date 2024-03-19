import { getQuoteLanguage } from "./getQuoutesLanguage"
import { showQuote } from "./showQuotes"

const changeQuoteButton = document.querySelector('.quotes__change-btn')

export async function getQuotes() {
	try {
		const fetchRequest = await fetch(getQuoteLanguage())
		const data = await fetchRequest.json()
		showQuote(data)
		changeQuoteButton.addEventListener('click', () => showQuote(data))
	}
	catch {
		console.error('Error fetching quotes:', error);
	}

}


