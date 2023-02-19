import cn from 'classnames';
import { ResumeFile } from '../../components';
import { ResumeProps } from './Resume.props';
import ResumeEN from '../../assets/resumeEN.pdf';
import ResumeRU from '../../assets/resumeRU.pdf';
export const Resume = ({ className, ...props }: ResumeProps): JSX.Element => {
	return (
		<div
			className={cn(
				className,
				'flex flex-col gap-4 text-lg max-h-full md:text-base'
			)}
			{...props}>
			<a
				href={ResumeEN}
				download
				className='bg-purpledark max-w-[220px] rounded-md p-3 self-center font-bold md:p-2'>
				<button>Download resume EN</button>
			</a>
			<ResumeFile />
			<a
				href={ResumeRU}
				download
				className='bg-purpledark max-w-[220px] rounded-md p-3 self-center font-bold md:p-2'>
				<button>Download resume RU</button>
			</a>
		</div>
	);
};
