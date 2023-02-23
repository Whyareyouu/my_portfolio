import { NotFoundPageProps } from './NotFoundPage.props';
import cn from 'classnames';
import { Link } from 'react-router-dom';
export const NotFoundPage = ({
	className,
	...props
}: NotFoundPageProps): JSX.Element => {
	return (
		<div
			className={cn(
				className,
				'flex flex-col w-full justify-center items-center text-3xl h-full font-medium'
			)}
			{...props}>
			<h1>The page you are trying to get to does not exist.</h1>
			<h2>
				Go back to the{' '}
				<Link to='/' className='text-bubble-gum font-bold'>
					Home page
				</Link>
			</h2>
		</div>
	);
};
