import { getQuotesLanguage } from "./getQuotesLanguage"

export const getQuotesData = async () => {
	const quotesLang = getQuotesLanguage()
	const fetchRequest = await fetch(quotesLang)
	const data = await fetchRequest.json()
	return data
}