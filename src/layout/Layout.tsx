import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';
import './Layout.css';

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	return (
		<div className='wrapper' {...props}>
			<Header className='header' />
			<main className='bg-bluedark/[0.6] rounded-xl p-3 main'>{children}</main>
			<Footer className='footer' />
		</div>
	);
};
