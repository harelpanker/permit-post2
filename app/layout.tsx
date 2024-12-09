import type { Metadata } from 'next';
import { ibm, inter, poppins } from '@/lib/fonts';
// import Navbar from '@/components/layout/Navbar';
import './globals.css';
// import Footer from '@/components/layout/Footer';

type Props = { children: React.ReactNode };

export const metadata: Metadata = {
	metadataBase: new URL('https://www.permit.io'),
	openGraph: {
		url: 'https://www.permit.io',
		siteName: 'Permit.io',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@permit_io',
	},
	alternates: {
		languages: {
			'en-US': '/en-US',
		},
	},
};

export default function RootLayout({ children }: Readonly<Props>) {
	return (
		<html lang='en' dir='ltr' className={`scroll-smooth ${poppins.variable} ${inter.variable} ${ibm.variable}`}>
			<body className='min-h-dvh bg-_FDF8F6 font-inter text-_451E11'>
				<div className='overflow-clip'>
					{/* <Navbar /> */}
					<main className='relative z-10 w-full overflow-clip'>{children}</main>
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
}
