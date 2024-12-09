import { Poppins, Inter, IBM_Plex_Mono } from 'next/font/google';

export const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-inter',
});

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
});

export const ibm = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-ibm',
});
