import { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import cn from 'classnames';
export const Input = forwardRef(
	(
		{ className, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<input
				className={cn(
					className,
					'rounded-lg bg-purple p-2 max-w-[420px] text-lg font-medium placeholder:text-[#eae9f4]'
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = 'Input';
