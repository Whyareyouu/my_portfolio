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
			.get('http://localhost:5000/projects')
			.then((response) => setProjects(response.data));
	}, []);
	if (projects) {
		return (
			<>
				<h1 className='text-4xl font-bold text-center mb-4'>My pet-project</h1>
				<div
					className={cn(
						className,
						'flex flex-wrap justify-center gap-8 px-8 py-4 gap-y-6'
					)}
					{...props}>
					{projects.map((project) => (
						<ProjectCard project={project} key={project._id} />
					))}
				</div>
			</>
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
