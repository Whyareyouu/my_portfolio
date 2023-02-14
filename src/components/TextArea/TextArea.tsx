import { ForwardedRef, forwardRef } from 'react';
import { TextAreaProps } from './TextArea.props';
import cn from 'classnames';
export const TextArea = forwardRef(
	(
		{ error, className, ...props }: TextAreaProps,
		ref: ForwardedRef<HTMLTextAreaElement>
	): JSX.Element => {
		return (
			<div className='flex flex-col max-w-[420px] max-h-[320px] h-full w-full justify-center items-center gap-2'>
				<textarea
					className={cn(
						className,
						'rounded-lg bg-purple p-2 text-lg font-medium placeholder:text-[#eae9f4]'
					)}
					{...props}
					ref={ref}
				/>
				{error && (
					<span
						className={cn('block text-red text-lg font-bold', {
							' hidden': !error.message,
						})}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
