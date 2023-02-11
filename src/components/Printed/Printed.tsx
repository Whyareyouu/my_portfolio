import { PrintedProps } from './Printed.props';
import Typewriter from 'typewriter-effect';
export const Printed = ({ ...props }: PrintedProps) => {
	return (
		<Typewriter
			options={{
				strings: [
					'Hello, everyone',
					'I`m Frontend developer from Moscow',
					'I love writing code, watching anime',
					'And sometimes play computer games',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
			{...props}
		/>
	);
};
