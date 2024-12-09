import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['var(--font-inter)'],
				poppins: ['var(--font-poppins)'],
				ibm: ['var(--font-ibm)'],
			},
			colors: {
				transparent: 'transparent',
				_FDF8F6: '#FDF8F6',
				_451E11: '#451E11',
				_974EF2: '#974EF2',
				_FDFCFC: '#FDFCFC',
				_2B1400: '#2B1400',
				_A666F4: '#A666F4',
				_FFF1E7: '#FFF1E7',
				_A18072: '#A18072',
				_FFCCA7: '#FFCCA7',
				_D1B9B0: '#D1B9B0',
				_7011E4: '#7011E4',
				_FFE8D7: '#FFE8D7',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} satisfies Config;
