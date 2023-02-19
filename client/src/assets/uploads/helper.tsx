import { DetailedHTMLProps, HTMLAttributes } from 'react';
import CatBlog from './CatBlog.png';
import FirstShop from './FirstShop.png';
import TopPage from './TopPage.png';
import TrendSoft from './TrendSoft.png';
interface ImagesProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	index: number;
}
export const Images = ({ index }: ImagesProps): JSX.Element => {
	const images = [FirstShop, CatBlog, TopPage, TrendSoft];
	return <img src={images[index]} alt='preview' className='rounded-lg' />;
};
