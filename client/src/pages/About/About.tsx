import { AboutProps } from './About.props';
import cn from 'classnames';
import { GitHubActivity, Skills } from '../../components';
import Banner from './banner.jpg';
export const About = ({ className, ...props }: AboutProps): JSX.Element => {
	return (
		<div className={cn(className, 'flex flex-col gap-5')} {...props}>
			<div className='flex gap-2 px-10 py-4 text-xl items-start justify-between md:flex-col md:justify-center md:items-center md:gap-3'>
				<div className='flex flex-col gap-3 max-w-[520px] md:max-w-full md:items-center md:justify-center'>
					<h1 className='text-3xl font-bold mb-2 lg:text-2xl'>Who am I</h1>
					<p className='lg:text-base md:text-xl md:text-center sm:text-base'>
						Hello everyone, I am a beginning Frontend developer, BUT extremely
						perspective.
					</p>
					<p className='lg:text-base md:text-xl sm:text-base'>My hobbies:</p>
					<ul className='ml-8 list-disc lg:text-base md:m-0 md:text-xl sm:text-base'>
						<li>Watching anime (my favorite is Hunter x Hunter);</li>
						<li>Listening to music;</li>
						<li>Play games;</li>
						<li>Listening to podcasts;</li>
					</ul>
				</div>
				<img
					src={Banner}
					alt='banner'
					className='max-w-sm rounded-lg w-full lg:max-w-xs md:max-w-sm'
				/>
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
