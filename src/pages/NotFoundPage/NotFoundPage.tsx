import { NotFoundPageProps } from './NotFoundPage.props';
import cn from 'classnames';
export const NotFoundPage = ({
	className,
	...props
}: NotFoundPageProps): JSX.Element => {
	return (
		<div className={cn(className, '')} {...props}>
			<h1>Page notfound</h1>
		</div>
	);
};
