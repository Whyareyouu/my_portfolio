import GitHubIcon from './github.svg';
import GmailIcon from './gmail.svg';
import VkIcon from './vk.svg';
import TGIcon from './telegram.svg';
import { HandySvg } from 'handy-svg';
export const Socials = () => {
	return (
		<div className='flex gap-1 flex-row-reverse'>
			<a href='mailto:bionixxxd5@gmail.com' target='_blank' rel='noreferrer'>
				<HandySvg
					className='border-4 border-purpledark p-2 rounded-full'
					src={GmailIcon}
					width={46}
					height={46}
				/>
			</a>
			<a href='https://github.com/Whyareyouu' target='_blank' rel='noreferrer'>
				<HandySvg
					className='border-4 border-purpledark p-2 rounded-full'
					src={GitHubIcon}
					width={46}
					height={46}
				/>
			</a>
			<a href='https://vk.com/aameamee' target='_blank' rel='noreferrer'>
				<HandySvg
					className='border-4 border-purpledark p-2 rounded-full'
					src={VkIcon}
					width={46}
					height={46}
				/>
			</a>
			<a href='https://t.me/whyareyou112' target='_blank' rel='noreferrer'>
				<HandySvg
					className='border-4 border-purpledark p-2 rounded-full'
					src={TGIcon}
					width={46}
					height={46}
				/>
			</a>
		</div>
	);
};
