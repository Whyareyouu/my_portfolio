import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../../assets/icons/Logo.png';
import HomeIcon from '../../assets/icons/home.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import ProjectsIcon from '../../assets/icons/projects.svg';
import ResumeIcon from '../../assets/icons/resume.svg';
import ContactIcon from '../../assets/icons/contact.svg';
import { HandySvg } from 'handy-svg';
export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<nav
			className={cn('flex items-center justify-between', className)}
			{...props}>
			<img src={Logo} alt='Logo' className='w-16' />
			<ul className='flex gap-6 text-lg'>
				<li className='flex gap-2'>
					<HandySvg src={HomeIcon} width='24' height='24' />
					<span>Home</span>
				</li>
				<li className='flex gap-2'>
					<HandySvg src={ProfileIcon} width='24' height='24' />
					<span>About</span>
				</li>
				<li className='flex gap-2'>
					<HandySvg src={ProjectsIcon} width='24' height='24' />
					<span>Projects</span>
				</li>
				<li className='flex gap-2'>
					<HandySvg src={ContactIcon} width='24' height='24' />
					<span>Contact</span>
				</li>
				<li className='flex gap-2'>
					<HandySvg src={ResumeIcon} width='24' height='24' />
					<span>Resume</span>
				</li>
			</ul>
		</nav>
	);
};
