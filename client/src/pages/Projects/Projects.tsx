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
		const data = axios
			.get('http://localhost:5000/projects')
			.then((response) => setProjects(response.data));
	}, []);
	if (projects) {
		return (
			<div className={cn(className, 'px-8 py-4')} {...props}>
				{projects &&
					projects.map((project) => (
						<ProjectCard project={project} key={project._id} />
					))}
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
