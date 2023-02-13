import { TextAreaProps } from './TextArea.props';

export const TextArea = ({ ...props }: TextAreaProps): JSX.Element => {
	return (
		<textarea
			className='rounded-lg bg-purple p-2 max-w-[420px] text-lg font-medium placeholder:text-[#eae9f4]'
			{...props}
		/>
	);
};
