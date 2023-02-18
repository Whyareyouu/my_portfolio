import { HandySvg } from 'handy-svg';
import JSIcon from './icons/javascript.svg';
import TSIcon from './icons/typescript.svg';
import NextIcon from './icons/nextjs.svg';
import ReactIcon from './icons/react.svg';
import CSSIcon from './icons/css.svg';
import HTMLIcon from './icons/html.svg';
import NpmIcon from './icons/npm.svg';
import ReduxIcon from './icons/redux.svg';
import TailwindIcon from './icons/tailwindcss.svg';
import GitIcon from './icons/git.svg';
import { motion } from 'framer-motion';
export const Skills = (): JSX.Element => {
	return (
		<div className='grid grid-cols-5 items-center justify-items-center gap-y-4 el:grid-cols-4 lg:grid-cols-3 md:flex md:flex-wrap md:gap-6 md:justify-center'>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={JSIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={TSIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={ReactIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={ReduxIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={NextIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={HTMLIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={CSSIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={TailwindIcon}
					width={192}
					height={132}
					className='border-2 px-14 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={GitIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
			<motion.div
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.5 },
				}}>
				<HandySvg
					src={NpmIcon}
					width={192}
					height={132}
					className='border-2 px-4 py-8 border-purple rounded-md hover:border-purpledark'
				/>
			</motion.div>
		</div>
	);
};
