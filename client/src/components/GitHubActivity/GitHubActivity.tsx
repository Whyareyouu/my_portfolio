import GitHubCalendar from 'react-github-calendar';
import { GitHubActivityProps } from './GitHubActivity.props';
import cn from 'classnames';
export const GitHubActivity = ({
	className,
	...props
}: GitHubActivityProps): JSX.Element => {
	return (
		<div className={cn(className, 'text-purple')} {...props}>
			<GitHubCalendar username='Whyareyouu' blockMargin={6} color={'#ff00e6'} />
		</div>
	);
};
