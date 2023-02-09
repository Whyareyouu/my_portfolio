import { HomeProps } from './Home.props';
import cn from 'classnames';
export const Home = ({ className, ...props }: HomeProps): JSX.Element => {
	return (
		<div className={cn(className, '')} {...props}>
			<div>
				<div>
					<h1>Hi There!</h1>
					<p>Name</p>
				</div>
				<img src='' alt='' />
			</div>
			<div>
				<div>
					<h2>About me</h2>
				</div>
				<img src='' alt='' />
			</div>
			<div>Socials</div>
		</div>
	);
};
