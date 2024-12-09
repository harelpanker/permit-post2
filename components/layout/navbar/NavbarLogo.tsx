import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/company/nav_logo.svg';

const NavbarLogo = () => {
	return (
		<Link className='max-w-[150px] lg:max-w-[196px]' href='/'>
			<Image src={logo} alt='Permit logo' priority />
		</Link>
	);
};

export default NavbarLogo;
