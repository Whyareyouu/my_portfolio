import { DetailedHTMLProps, HTMLAttributes } from 'react';
export interface SocialsProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	border: 'none' | 'yes';
	type?: 'footer' | 'default';
}
