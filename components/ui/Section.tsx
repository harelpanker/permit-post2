import React from 'react';
import { cn } from '@/lib/utils';

const Section = ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
	return (
		<section className={cn(`relative z-20 w-full px-5 lg:px-12`, className)} {...props}>
			{children}
		</section>
	);
};

export default Section;
