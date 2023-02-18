import { HomeProps } from './Home.props';
import cn from 'classnames';
import Avatar from './Avatar.jpg';
import Development from './development.png';
import { Printed, Socials } from '../../components';
export const Home = ({ className, ...props }: HomeProps): JSX.Element => {
	return (
		<div
			className={cn(
				className,
				'flex flex-col gap-10 justify-center px-10 py-4 md:gap-5 sm:px-5'
			)}
			{...props}>
			<div className='flex justify-between gap-3 md:flex-col md:justify-center md:items-center'>
				<div className='flex flex-col gap-4 text-4xl lg:gap-2 md:justify-center md:items-center'>
					<h1
						className='font-bold lg:text-3xl md:text-2xl sm:text-xl'
						style={{
							textShadow:
								'2px -2px 0px #47319c, -2px 2px 0px #47319c, -2px -2px 0px #47319c, 2px 2px 0px #47319c, 0px -2px 0px #47319c, 0px 2px 0px #47319c, 2px 0px 0px #47319c, -2px 0px 0px #47319c',
						}}>
						Hi There!
					</h1>
					<p className='uppercase mb-9 font-bold lg:text-3xl lg:mb-5 md:text-2xl sm:text-xl sm:mb-2'>
						I'M <span className='text-purple'>Chernov Nikita</span>
					</p>
					<Printed className='lg:text-3xl md:text-2xl sm:text-xl' />
				</div>
				<img
					src={Development}
					alt='Development_image'
					className='max-w-[420px] w-full rounded-md lg:max-w-[300px] md:max-w-[360px]'
				/>
			</div>
			<div className='flex justify-between items-center gap-3 md:flex-col md:justify-center'>
				<div className='max-w-[530px] flex flex-col gap-4 lg:max-w-[380px] md:max-w-[480px] md:justify-center md:items-center'>
					<h2 className='uppercase text-4xl font-bold lg:text-3xl md:text-2xl sm:text-xl'>
						A little <span className='text-purple'>about me</span>
					</h2>
					<p className='text-lg md:text-base text-justify sm:text-sm'>
						I`m a novice Frontend developer who is ready for interesting tasks,
						but I also understand the importance of correcting defects and
						performing routine tasks as new functionality is developed.
					</p>
					<p className='text-lg md:text-base text-justify sm:text-sm'>
						I always try not to stop there, I like to learn new things, improve
						my various skills and broaden my horizons.
					</p>
				</div>
				<img
					src={Avatar}
					alt='avatar'
					className='max-h-[220px] max-w-[220px] w-full h-full rounded-[50%] md:max-w-[160px] md:max-h-[160px]'
				/>
			</div>
			<div className='flex flex-col justify-center items-center gap-4'>
				<h2 className='text-4xl font-bold md:text-3xl'>
					Get In <span className='text-purple'>Touch</span>
				</h2>
				<p className='max-w-[480px] text-center'>
					Whether you have a question or just want to say hi, I’ll try my best
					to get back to you!
				</p>
				<div>
					<Socials border='yes' />
				</div>
			</div>
		</div>
	);
};
