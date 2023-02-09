import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';

export const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	return (
		<div {...props}>
			<Header />
			<main>{children}</main>
			<footer></footer>
		</div>
	);
};
