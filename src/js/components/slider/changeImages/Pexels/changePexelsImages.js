import { createClient } from 'pexels';
import { query } from '../../../query/setQueryValue/setQueryVariableValue';
import { queryWrapper } from "../../../query/changePexelsImgOnQueryInputChange"
import { showSliderPopup } from '../../sliderPopup/showSliderPopup';
import { getStorageImagesSrc } from '../../../imagesSrc/localStorageImagesSrc';
import { getStorageNumPicturePexels, setStorageNumPicturePexels } from '../../localStorageSlider';
import { loadImage } from '../loadImage';

const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
export let MAX_PEXELS_IMAGES;

export const changePexelsImages = () => {
	const imagesSrc = getStorageImagesSrc()
	const pexelsNumb = getStorageNumPicturePexels()
	if (imagesSrc === 'pexels') {
		queryWrapper.classList.remove('query_hide')
		client.photos.search({ query, locale: 'ru-RU', per_page: 80 }).then(e => {
			if (e && e.photos && e.photos.length > 1) {
				MAX_PEXELS_IMAGES = e.photos.length - 1
				if (!pexelsNumb) {
					setStorageNumPicturePexels(0)
					loadImage(e.photos[pexelsNumb].src.landscape)
				}
				else {
					pexelsNumb >= 0 ? loadImage(e.photos[pexelsNumb].src.landscape) : loadImage(e.photos[MAX_PEXELS_IMAGES + pexelsNumb].src.landscape)
				}
			} else {
				showSliderPopup('add')
			}
		});
	}
}