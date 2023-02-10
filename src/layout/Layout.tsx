import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	return (
		<div {...props}>
			<Header />
			<main className='bg-bluedark/[0.6] rounded-xl p-3'>{children}</main>
			<footer></footer>
		</div>
	);
};
