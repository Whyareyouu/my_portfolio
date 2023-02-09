import cn from 'classnames';
import { ResumeProps } from './Resume.props';
export const Resume = ({ className, ...props }: ResumeProps): JSX.Element => {
	return <div className={cn(className, '')} {...props}></div>;
};
