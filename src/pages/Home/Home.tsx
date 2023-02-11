import { HomeProps } from './Home.props';
import cn from 'classnames';
import Room from './Room.jpg';
import Avatar from './Avatar.jpg';
import { Printed, Socials } from '../../components';
export const Home = ({ className, ...props }: HomeProps): JSX.Element => {
	return (
		<div
			className={cn(
				className,
				'flex flex-col gap-10 justify-center px-10 py-4'
			)}
			{...props}>
			<div className='flex justify-between gap-3'>
				<div className='flex flex-col gap-4 text-4xl'>
					<h1
						style={{
							textShadow:
								'2px -2px 0px #47319c, -2px 2px 0px #47319c, -2px -2px 0px #47319c, 2px 2px 0px #47319c, 0px -2px 0px #47319c, 0px 2px 0px #47319c, 2px 0px 0px #47319c, -2px 0px 0px #47319c',
						}}>
						Hi There!
					</h1>
					<p className='uppercase mb-9'>
						I'M <span className='text-purple'>Chernov Nikita</span>
					</p>
					<Printed />
				</div>
				<img
					src={Room}
					alt='Room'
					className='max-w-[520px] w-full rounded-md'
				/>
			</div>
			<div className='flex justify-between items-center gap-3'>
				<div className='max-w-[530px] flex flex-col gap-4'>
					<h2 className='uppercase text-4xl'>
						A little <span className='text-purple'>about me</span>
					</h2>
					<p className='text-lg'>
						I`m a novice Frontend developer who is ready for interesting tasks,
						but I also understand the importance of correcting defects and
						performing routine tasks as new functionality is developed.
					</p>
					<p className='text-lg'>
						I always try not to stop there, I like to learn new things, improve
						my various skills and broaden my horizons.
					</p>
				</div>
				<img
					src={Avatar}
					alt='avatar'
					className='h-[220px] w-[220px] rounded-[50%]'
				/>
			</div>
			<div className='flex flex-col justify-center items-center gap-4'>
				<h2 className='text-4xl'>Get In Touch</h2>
				<p className='max-w-[480px] text-center'>
					Whether you have a question or just want to say hi, I’ll try my best
					to get back to you!
				</p>
				<div>
					<Socials />
				</div>
			</div>
		</div>
	);
};
