'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useWindowScroll, useViewportSize } from '@mantine/hooks';
import NavbarDesktop from './navbar/NavbarDesktop';
import DesktopMenu from './navbar/DesktopMenu';
import MobileMenu from './navbar/MobileMenu';
import NavbarLogo from './navbar/NavbarLogo';
import MenuMobileButton from './navbar/MenuMobileButton';

const Navbar = () => {
	const [scroll] = useWindowScroll();
	const { width } = useViewportSize();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const isMobile = 1280;

	const isNavTransparent =
		pathname === '/' ||
		pathname === '/about' ||
		pathname === '/blog' ||
		pathname === '/pricing' ||
		pathname === '/customers' ||
		pathname.includes('/blog') ||
		pathname.includes('/author') ||
		pathname === '/healthcare' ||
		pathname.includes('/tags');

	const handleOpen = () => {
		setOpen(!open);
		document.querySelector('body')?.classList.toggle('overflow-hidden');
		document.querySelector('body')?.classList.toggle('h-full');

		document.querySelector('#get-started-today')?.classList.toggle('hidden');
	};

	return (
		<>
			<header
				className={`sticky top-0 z-50 -mb-[3.8rem] flex w-full flex-col items-center transition duration-300 lg:-mb-[4.8rem]`}>
				{/* {!open && <ProductHuntBanner />} */}
				{/* desktop nav */}
				<div
					className={`${
						scroll.y > 50 && !open
							? isNavTransparent
								? 'bg-[#FDF3EE]/50 backdrop-blur'
								: 'bg-[#FDF3EE]'
							: 'bg-transparent'
					} relative z-20 flex w-full content-center items-center justify-between border-b border-[#EADDD7] px-5 py-1 transition-all duration-300 2xl:grid 2xl:grid-cols-3`}>
					{/* logo */}
					<NavbarLogo />
					{/* nav links desktop */}
					{width >= isMobile && (
						<>
							<NavbarDesktop />
							<div className='overflow-x-hidden'>
								<div
									className={`hidden w-full items-center justify-end gap-6 transition duration-300 lg:flex ${
										scroll.y > 400 ? 'translate-x-0' : 'translate-x-32'
									} `}>
									<DesktopMenu />
								</div>
							</div>
						</>
					)}

					{/* nav button mobile  */}
					{width < isMobile && <MenuMobileButton open={open} handleOpen={handleOpen} />}
				</div>
			</header>

			{/* mobile menu */}
			{width < isMobile && (
				<div
					className={`h-100dvh fixed inset-0 left-0 top-0 z-20 w-full translate-x-full overflow-auto bg-[#FDF3EE] px-5 pb-8 pt-28 opacity-0 transition xl:hidden ${
						open ? '!translate-x-0 !opacity-100' : ''
					}`}>
					<MobileMenu handleOpen={handleOpen} />
				</div>
			)}
		</>
	);
};

export default Navbar;
