import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { FormProps } from './Form.props';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { IFormContact, IFormResponse } from '../../interfaces/Form.interface';
import { useState } from 'react';
import axios from 'axios';
export const Form = ({ className, ...props }: FormProps): JSX.Element => {
	const [succes, setSucces] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IFormContact>({ mode: 'onBlur' });
	const onSubmit = async (formData: IFormContact) => {
		try {
			const data = await axios.post<IFormResponse>(
				'https://my-portfolio-nine-smoky-71.vercel.app/contact',
				formData
			);
			if (data.status === 200) {
				setSucces(true);
				reset();
			}
		} catch (err) {
			setError('Failed to send message');
		}
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
				type='email'
			/>
			<Input
				placeholder='Theme'
				{...register('theme', {
					required: {
						value: true,
						message: 'This field is required',
					},
				})}
				className='w-full'
				error={errors.theme}
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
			<button className='bg-purple rounded-md px-6 py-3 text-xl font-medium'>
				Send message
			</button>
			<div className={cn('block', { ' hidden': !succes })}>
				<span className='text-green text-2xl'>
					Your message has been sent successfully
				</span>
			</div>
			<div className={cn('block', { ' hidden': !error })}>
				<span className='text-red text-lg font-bold'>{error}</span>
			</div>
		</form>
	);
};
