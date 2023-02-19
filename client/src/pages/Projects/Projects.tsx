import { ProjectsProps } from './Projects.props';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { IProject } from '../../interfaces/Project.interface';
import axios from 'axios';
import { ProjectCard } from '../../components';
import { Triangle } from 'react-loader-spinner';
export const Projects = ({
	className,
	...props
}: ProjectsProps): JSX.Element => {
	const [projects, setProjects] = useState<IProject[] | null>(null);
	useEffect(() => {
		axios
			.get('https://my-portfolio-nine-smoky-71.vercel.app/projects')
			.then((response) => setProjects(response.data));
	}, []);
	if (projects) {
		return (
			<div>
				<h1 className='text-4xl font-bold text-center my-6'>
					My <span className='text-purple'>pet-projects</span>
				</h1>
				<div
					className={cn(
						className,
						'flex flex-wrap justify-center gap-8 px-8  py-4'
					)}
					{...props}>
					{projects.map((project, index) => (
						<ProjectCard project={project} key={project._id} index={index} />
					))}
				</div>
			</div>
		);
	} else {
		return (
			<div className='flex justify-center items-center h-full w-full'>
				<Triangle
					height='160'
					width='160'
					color='#ff77e9'
					ariaLabel='triangle-loading'
					visible={true}
				/>
			</div>
		);
	}
};
