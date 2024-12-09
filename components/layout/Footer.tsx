'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, Check } from 'lucide-react';
import Certified from './footer/Certified';
import JoinModule from '@/components/ui/JoinModule';
import logo from '@/public/images/company/logo_small.png';

const CALENDLY_URL = 'https://calendly.com/d/44n-hc4-th3';

const Footer = () => {
	const [isOpen, setIsOpen] = useState(false);
	const now = new Date();
	const year = Math.max(now.getFullYear(), 2022);
	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	return (
		<footer className='relative z-20 bg-_FFE8D7 px-5 py-10 lg:px-12 lg:py-16'>
			<div className='container flex flex-col gap-12 pt-10'>
				{/* top */}
				<div className='flex flex-col items-center justify-between gap-10 xl:grid xl:grid-cols-3 xl:items-start'>
					{/* top left */}
					<div className='flex flex-col'>
						<div className='flex flex-col gap-8 lg:justify-self-start'>
							<div className='flex flex-col items-center gap-6 lg:flex-row'>
								<Image className='w-auto' src={logo} alt='logo' width={104} height={30} />
								<p className='mt-[1px] text-sm'>Fullstack Permissions</p>
							</div>
						</div>
					</div>
					{/* top center */}
					<div className='flex flex-col gap-10 text-center lg:flex-row lg:justify-self-center lg:text-left 2xl:gap-20'>
						<nav className='flex flex-col gap-5'>
							<p className='text-sm font-bold uppercase'>Product</p>
							<ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/blog'>
										Blog
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/videos'>
										Videos
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/pricing'>
										Pricing
									</a>
								</li>
								{/* https://stackoverflow.com/questions/75115890/a-anchor-in-nextjs-not-scrolling-to-id-but-when-manually-typed-in-the-ur */}
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/pricing#faqs'>
										FAQ&apos;s
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://docs.permit.io/'
										className='transition hover:text-_7011E4'>
										Docs
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='transition hover:text-_7011E4'
										href='https://permit.productlane.com/roadmap'>
										Roadmap
									</a>
								</li>
							</ul>
						</nav>
						<nav className='flex flex-col gap-5'>
							<p className='text-sm font-bold uppercase'>Solutions</p>
							<ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/rbac'>
										RBAC
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/abac'>
										ABAC
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/rebac'>
										ReBAC
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/elements'>
										Elements
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/foaz'>
										FoAz
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/healthcare'>
										Healthcare
									</a>
								</li>
							</ul>
						</nav>
						<nav className='flex flex-col gap-5'>
							<p className='text-sm font-bold uppercase'>Company</p>
							<ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/about'>
										About
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/customers'>
										Customers
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/open-source'>
										Open Source
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/career'>
										Careers
									</a>
								</li>
							</ul>
						</nav>
						<nav className='flex flex-col gap-5'>
							<p className='text-sm font-bold uppercase'>Support</p>
							<ul className='flex flex-col gap-3 whitespace-nowrap text-sm'>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/legal/terms-and-conditions'>
										Terms & Conditions
									</a>
								</li>
								<li>
									<a
										className='transition hover:text-_7011E4'
										target='_blank'
										rel='noopener noreferrer'
										href='https://www.permit.io/legal/privacy-policy'>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='https://permit-io.instatus.com/'
										className='transition hover:text-_7011E4'>
										Service Status
									</a>
								</li>
								<li>
									<a
										target='_blank'
										rel='noopener noreferrer'
										href='mailto:help@permit.io'
										className='transition hover:text-_7011E4'>
										Email
									</a>
								</li>
							</ul>
						</nav>
					</div>
					{/* top right */}
					<div className='flex items-start justify-start lg:justify-self-end'>
						<button
							onClick={openModal}
							className='schedule_a_meeting group col-span-2 flex items-center justify-between gap-4 self-center justify-self-center rounded-full border border-_974EF2 bg-_974EF2 py-2 pl-[22px] pr-4 text-sm font-semibold text-_FDFCFC transition duration-300 hover:bg-transparent hover:text-_974EF2 md:col-span-3'>
							<div className='flex items-center gap-3'>
								<Calendar className='pointer-events-none h-3 w-3' />
								<span className='pointer-events-none'>Schedule a Meeting</span>
							</div>
							<Check className='h-3 w-3' />
						</button>
					</div>
				</div>
				{/* bottom */}
				<div className='flex flex-col items-center gap-10 text-xs lg:flex-row lg:items-end lg:justify-between'>
					<Certified />
					<p>© {year} Permit Inc.</p>
				</div>
			</div>
			<JoinModule isOpen={isOpen} closeModal={closeModal} url={CALENDLY_URL} />
		</footer>
	);
};

export default Footer;
