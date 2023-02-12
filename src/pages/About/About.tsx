import { AboutProps } from './About.props';
import cn from 'classnames';
import { GitHubActivity, Skills } from '../../components';
export const About = ({ className, ...props }: AboutProps): JSX.Element => {
	return (
		<div className={cn(className, 'flex flex-col gap-5')} {...props}>
			<div>
				<h2 className='text-center text-3xl font-bold mb-6'>
					Technical Skills
				</h2>
				<Skills />
			</div>
			<div className='self-center'>
				<h2 className='text-center text-3xl font-bold mb-6'>Days | Code</h2>
				<GitHubActivity />
			</div>
		</div>
	);
};
