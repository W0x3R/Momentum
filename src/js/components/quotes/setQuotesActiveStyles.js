const quotesChangeBtn = document.querySelector('.quotes__change-btn')
let rotate = 0;

export const setQuotesActiveStyles = () => {
	rotate += 180;
	quotesChangeBtn.style.transform = `rotate(${rotate}deg)`
}