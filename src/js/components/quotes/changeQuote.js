import { getQuotesData } from "./getQuotesData";
import { showQuote } from "./quoteDisplayer"

export const changeQuote = async () => {
	try {
		const data = await getQuotesData()
		showQuote(data)
	}
	catch {
		console.error('Error fetching quotes:', error);
	}
}