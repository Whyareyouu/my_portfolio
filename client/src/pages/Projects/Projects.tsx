import { ProjectsProps } from './Projects.props';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { IProject } from '../../interfaces/Project.interface';
import axios from 'axios';
import { ProjectCard } from '../../components';
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
	return (
		<div>
			{projects &&
				projects.map((project) => (
					<ProjectCard project={project} key={project._id} />
				))}
		</div>
	);
};
