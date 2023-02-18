import cn from 'classnames';
import { ProjectCardProps } from './ProjectcCard.props';
export const ProjectCard = ({
	className,
	project,
	...props
}: ProjectCardProps): JSX.Element => {
	const { title, description, tags, imageUrl, linkGitHub, linkDemo } = project;
	return (
		<div
			className={cn(
				className,
				'flex flex-col max-w-md justify-start items-center gap-2 border-[1px] border-purpledark rounded-md shadow-lg shadow-purpledark p-4 md:p-2 '
			)}
			{...props}>
			<img
				src={`http://localhost:5000${imageUrl}`}
				alt='preview'
				className='rounded-lg'
			/>
			<h2 className='text-xl font-medium'>{title}</h2>
			<div className='text-center'>
				{tags.map((tag, index) => (
					<span key={index} className='text-sm'>
						{tag.replaceAll(',', ' | ')}
					</span>
				))}
			</div>
			<p className='text-justify'>{description}</p>
			<div className='flex justify-center items-start gap-3'>
				<a
					href={linkGitHub}
					className='bg-purpledark rounded-md px-3 py-2 self-center'
					target='_blank'
					rel='noreferrer'>
					GitHub
				</a>
				<a
					href={linkDemo ? linkDemo : '#'}
					className='bg-purpledark rounded-md px-3 py-2 self-center'
					target='_blank'
					rel='noreferrer'>
					{linkDemo ? 'Demo' : 'In development'}
				</a>
			</div>
		</div>
	);
};
