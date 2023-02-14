import { ContactProps } from './Contact.props';
import cn from 'classnames';
import { Form } from '../../components';
export const Contact = ({ className, ...props }: ContactProps): JSX.Element => {
	return (
		<div
			className={cn(
				className,
				'flex flex-col gap-4 justify-center items-center py-6'
			)}
			{...props}>
			<h1 className='font-bold text-4xl'>Get in touch</h1>
			<p className='text-lg max-w-xs text-center leading-7 font-medium'>
				Whether you have a question or just want to say hi, I’ll try my best to
				get back to you!
			</p>
			<Form className='w-full' />
		</div>
	);
};
