import { createClient } from 'pexels';
import { query } from '../../../query/setQueryValue/setQueryVariableValue';
import { queryWrapper } from "../../../query/changePexelsImgOnQueryInputChange"
import { showSliderPopup } from '../../sliderPopup/sliderPopupVisibility';
import { getStorageImagesSrc } from '../../../imagesSrc/imagesSrcStorage';
import { getStorageNumPicturePexels, setStorageNumPicturePexels } from '../../sliderStorage';
import { loadImageFromUrl } from '../imageLoader';
import { selectingPexelsImageSize } from './selectingPexelsImageSize';

const client = createClient('5hopODRoIFw4TPxHIxDAQJItNDcFirsqca011wJt3lfNH9ZGBPaCHKtj');
export let MAX_PEXELS_IMAGES;

export const changePexelsImages = () => {
	const imagesSrc = getStorageImagesSrc()
	const pexelsNumb = getStorageNumPicturePexels()
	const imageSize = selectingPexelsImageSize()

	if (imagesSrc === 'pexels') {
		queryWrapper.classList.remove('settings__query_hide')
		client.photos.search({ query, locale: 'ru-RU', per_page: 80 }).then(e => {
			if (e && e.photos && e.photos.length > 1) {
				MAX_PEXELS_IMAGES = e.photos.length - 1
				if (!pexelsNumb) {
					setStorageNumPicturePexels(0)
					loadImageFromUrl(e.photos[pexelsNumb].src[`${imageSize}`])
				}
				else {
					pexelsNumb >= 0 ? loadImageFromUrl(e.photos[pexelsNumb].src[`${imageSize}`]) : loadImageFromUrl(e.photos[MAX_PEXELS_IMAGES + pexelsNumb].src[`${imageSize}`])
				}
			} else {
				showSliderPopup('add')
			}
		});
	}
}