import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { Socials } from '../../components';
export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer
			className={cn(className, 'flex justify-between items-center text-base')}
			{...props}>
			<p>
				Was inspired by the design of{' '}
				<a
					href='https://github.com/soumyajit4419'
					target='_blank'
					rel='noreferrer'
					className='text-bubble-gum'>
					Soumyajit Behera
				</a>
			</p>
			<h3 className='text-center'>Copyright © 2023</h3>
			<Socials border='none' />
		</footer>
	);
};
