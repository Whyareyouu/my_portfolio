import { ContactProps } from './Contact.props';
import cn from 'classnames';
import { Form } from '../../components';
export const Contact = ({ className, ...props }: ContactProps): JSX.Element => {
	return (
		<div>
			<Form />
		</div>
	);
};
