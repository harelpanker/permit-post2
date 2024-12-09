import React from 'react';
import { cn } from '@/lib/utils';

const Container = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
	return (
		<div className={cn(`container relative z-20 mx-auto w-full max-w-6xl`, className)} {...props}>
			{children}
		</div>
	);
};

export default Container;
