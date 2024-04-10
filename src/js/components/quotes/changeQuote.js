import { getQuotesData } from "./getQuotesData";
import { showQuote } from "./showQuote"

export const changeQuote = async () => {
	try {
		const data = await getQuotesData()
		showQuote(data)
	}
	catch {
		console.error('Error fetching quotes:', error);
	}
}