import { AboutProps } from './About.props';
import cn from 'classnames';
export const About = ({ className, ...props }: AboutProps): JSX.Element => {
	return <div className={cn(className, '')} {...props}></div>;
};
