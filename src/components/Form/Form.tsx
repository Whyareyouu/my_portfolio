import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { FormProps } from './Form.props';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { IFormContact } from '../../interfaces/Form.interface';
export const Form = ({ className, ...props }: FormProps): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormContact>({ mode: 'onBlur' });
	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action=''
			{...props}
			className={cn(
				className,
				'flex flex-col gap-5 justify-center items-center'
			)}>
			<Input
				placeholder='Email'
				{...register('email', {
					required: {
						value: true,
						message: 'This field is required',
					},
				})}
				className='w-full'
				error={errors.email}
			/>
			<Input
				placeholder='Title'
				{...register('title', {
					required: {
						value: true,
						message: 'This field is required',
					},
				})}
				className='w-full'
				error={errors.title}
			/>
			<TextArea
				placeholder='Message text'
				{...register('message', {
					required: {
						value: true,
						message: 'This field is required',
					},
				})}
				className='w-full'
				error={errors.message}
			/>
			<button className=' bg-purple rounded-md px-6 py-3 text-xl font-medium'>
				Send message
			</button>
		</form>
	);
};
