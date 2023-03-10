import GitHubIcon from './github.svg';
import GmailIcon from './gmail.svg';
import VkIcon from './vk.svg';
import TGIcon from './telegram.svg';
import { HandySvg } from 'handy-svg';
import { SocialsProps } from './Socials.props';
export const Socials = ({
	border = 'yes',
	type = 'default',
	...props
}: SocialsProps): JSX.Element => {
	return (
		<div className='flex gap-1 flex-row-reverse' {...props}>
			<a href='mailto:bionixxxd5@gmail.com' target='_blank' rel='noreferrer'>
				<HandySvg
					className={`${
						border === 'yes' ? 'border-4 border-purpledark' : ''
					} p-2 rounded-full ${type === 'footer' ? 'md:w-5 md:p-0' : ''}`}
					src={GmailIcon}
					width={46}
					height={46}
				/>
			</a>
			<a href='https://github.com/Whyareyouu' target='_blank' rel='noreferrer'>
				<HandySvg
					className={`${
						border === 'yes' ? 'border-4 border-purpledark' : ''
					} p-2 rounded-full ${type === 'footer' ? 'md:w-5 md:p-0' : ''}`}
					src={GitHubIcon}
					width={46}
					height={46}
				/>
			</a>
			<a href='https://vk.com/aameamee' target='_blank' rel='noreferrer'>
				<HandySvg
					className={`${
						border === 'yes' ? 'border-4 border-purpledark' : ''
					} p-2 rounded-full ${type === 'footer' ? 'md:w-5 md:p-0' : ''}`}
					src={VkIcon}
					width={46}
					height={46}
				/>
			</a>
			<a href='https://t.me/whyareyou112' target='_blank' rel='noreferrer'>
				<HandySvg
					className={`${
						border === 'yes' ? 'border-4 border-purpledark' : ''
					} p-2 rounded-full ${type === 'footer' ? 'md:w-5 md:p-0' : ''}`}
					src={TGIcon}
					width={46}
					height={46}
				/>
			</a>
		</div>
	);
};
