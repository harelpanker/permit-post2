import { FC } from 'react';
import { cn } from '@/lib/utils';

type TextProps = {
	children: React.ReactNode;
	styles?: string;
	size: 14 | 16 | 18 | 20; // size of desktop
};

const Text: FC<TextProps> = ({ children, styles, size }) => {
	return (
		<div
			className={cn(
				`text-pretty ${size === 14 ? 'text-sm' : ''} ${size === 16 ? 'text-base' : ''} ${
					size === 18 ? 'text-base lg:text-lg' : ''
				} ${size === 20 ? 'text-lg lg:text-xl' : ''}`,
				styles
			)}>
			{children}
		</div>
	);
};

export default Text;
