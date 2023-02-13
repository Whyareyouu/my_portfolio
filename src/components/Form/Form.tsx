import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { FormProps } from './Form.props';
import cn from 'classnames';
export const Form = ({ className, ...props }: FormProps): JSX.Element => {
	return (
		<form
			action=''
			{...props}
			className={cn(className, 'flex flex-col gap-5 justify-center')}>
			<Input placeholder='Email' />
			<Input placeholder='Title' />
			<TextArea placeholder='Message text' />
		</form>
	);
};
