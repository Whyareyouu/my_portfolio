import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProject } from '../../interfaces/Project.interface';
export interface ProjectCardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	project: IProject;
	index: number;
}
