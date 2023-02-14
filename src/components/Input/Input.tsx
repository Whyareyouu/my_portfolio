import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import cn from 'classnames';
export const Input = forwardRef(
	(
		{ error, className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className='flex flex-col max-w-[420px] items-center justify-center w-full gap-2'>
				<input
					className={cn(
						className,
						'rounded-lg bg-purple p-2 text-lg placeholder:text-[#eae9f4]'
					)}
					ref={ref}
					{...props}
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
Input.displayName = 'Input';
