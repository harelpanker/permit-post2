import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	`inline-flex font-semibold text-lg border-[2px] border-transparent
  justify-center gap-2 items-center whitespace-nowrap
  rounded-full ring-offset-white transition-colors focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-offset-2
  disabled:pointer-events-none disabled:opacity-50 px-6 py-3 tracking-[-0.5px] font-poppins`,
	{
		variants: {
			variant: {
				default: `bg-_974EF2 font-semibold text-_FDFCFC
         ring-offset-_974EF2 transition hover:border-_974EF2 hover:bg-_A666F4
         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
				outline:
					'hover:border-theme-orange-dark-2 rounded-full border-_D1B9B0 bg-_FFF1E7 text-_2B1400 hover:border-_A18072 hover:bg-_FFCCA7',
				link: 'text-_7011E4 underline-offset-4 font-inter hover:underline text-base',
			},
			size: {
				default: 'h-12 px-5 py-3',
				sm: 'h-9 text-sm px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
