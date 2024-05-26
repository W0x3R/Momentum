import { getQuotesData } from "./getQuotesData";
import { displayRandomQuote } from "./quoteDisplayer"

export const changeQuote = async () => {
	try {
		const data = await getQuotesData()
		displayRandomQuote(data)
	}
	catch {
		console.error('Error fetching quotes:', error);
	}
}