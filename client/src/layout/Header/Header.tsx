import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../../assets/icons/Logo.png';
import HomeIcon from '../../assets/icons/home.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import ProjectsIcon from '../../assets/icons/projects.svg';
import ResumeIcon from '../../assets/icons/resume.svg';
import ContactIcon from '../../assets/icons/contact.svg';
import { HandySvg } from 'handy-svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from './close.svg';
import OpenIcon from './open.svg';
import './Header.css';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [menu, setMenu] = useState<boolean>(false);
	return (
		<nav
			className={cn('flex items-center justify-between md:relative', className)}
			{...props}>
			<img src={Logo} alt='Logo' className='w-16 md:w-12' />
			<ul className='flex gap-6 text-lg md:hidden'>
				<li className='animate'>
					<Link className='flex gap-2 md:gap-1' to='/'>
						<HandySvg
							src={HomeIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Home</span>
					</Link>
				</li>
				<li className='animate'>
					<Link className='flex gap-2 md:gap-1' to='/about'>
						<HandySvg
							src={ProfileIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>About</span>
					</Link>
				</li>
				<li className='animate'>
					<Link className='flex gap-2 md:gap-1' to='/projects'>
						<HandySvg
							src={ProjectsIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Projects</span>
					</Link>
				</li>
				<li className='animate'>
					<Link className='flex gap-2 md:gap-1' to='/contact'>
						<HandySvg
							src={ContactIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Contact</span>
					</Link>
				</li>
				<li className='animate'>
					<Link className='flex gap-2 md:gap-1' to='/resume'>
						<HandySvg
							src={ResumeIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Resume</span>
					</Link>
				</li>
			</ul>
			<button className='hidden md:block z-20' onClick={() => setMenu(!menu)}>
				{menu ? (
					<HandySvg src={CloseIcon} width='24' height='24' className='' />
				) : (
					<HandySvg src={OpenIcon} width='24' height='24' className='' />
				)}
			</button>
			<ul
				className={`flex flex-col justify-center text-lg gap-4 md:text-lg z-10 md:w-full md:bg-bluedark md:py-4 absolute ${
					menu ? 'top-10 visible' : 'invisible w-0 h-0'
				}`}>
				<li className='self-center'>
					<Link className='flex gap-2 md:gap-1' to='/'>
						<HandySvg
							src={HomeIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Home</span>
					</Link>
				</li>
				<li className='self-center'>
					<Link className='flex gap-2 md:gap-1' to='/about'>
						<HandySvg
							src={ProfileIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>About</span>
					</Link>
				</li>
				<li className='self-center'>
					<Link className='flex gap-2 md:gap-1' to='/projects'>
						<HandySvg
							src={ProjectsIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Projects</span>
					</Link>
				</li>
				<li className='self-center'>
					<Link className='flex gap-2 md:gap-1' to='/contact'>
						<HandySvg
							src={ContactIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Contact</span>
					</Link>
				</li>
				<li className='self-center'>
					<Link className='flex gap-2 md:gap-1' to='/resume'>
						<HandySvg
							src={ResumeIcon}
							width='24'
							height='24'
							className='md:w-4'
						/>
						<span>Resume</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
