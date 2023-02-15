import { AboutProps } from './About.props';
import cn from 'classnames';
import { GitHubActivity, Skills } from '../../components';
import Banner from './banner.jpg';
export const About = ({ className, ...props }: AboutProps): JSX.Element => {
	return (
		<div className={cn(className, 'flex flex-col gap-5')} {...props}>
			<div className='flex gap-2 px-10 py-4 text-xl items-start justify-between'>
				<div className='flex flex-col gap-3 max-w-[520px]'>
					<h1 className='text-3xl font-bold mb-2'>Who am I</h1>
					<p>
						Hello everyone, I am a beginning Frontend developer, BUT extremely
						perspective.
					</p>
					<p>My hobbies:</p>
					<ul className='ml-8 list-disc'>
						<li>Watching anime (my favorite is Hunter x Hunter);</li>
						<li>Listening to music;</li>
						<li>Play games;</li>
						<li>Listening to podcasts;</li>
					</ul>
				</div>
				<img src={Banner} alt='banner' className='max-w-sm rounded-lg' />
			</div>
			<div>
				<h2 className='text-center text-3xl font-bold mb-6'>
					Technical Skills
				</h2>
				<Skills />
			</div>
			<div className='self-center pb-4'>
				<h2 className='text-center text-3xl font-bold mb-6'>Days | Code</h2>
				<GitHubActivity />
			</div>
		</div>
	);
};
